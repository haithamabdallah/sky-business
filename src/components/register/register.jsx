import { useState } from "react";
import { inputs } from "./data";
const Register = () => {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    console.log({ key, value });
    setForm({ ...form, [key]: value });
  };

  const handleSubmit = () => {
    console.log(`Sending form`);
    console.log({ form });
  };
  return (
    <form
      className="flex flex-col gap-y-2 px-3 sm:px-4"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <p
        className="w-full mb-8 border-b border-gray-400 border-opacity-80 pb-4 text-left
      font-normal min-[500px]:font-semibold text-base min-[500px]:text-xl"
      >
        Create Account
      </p>

      {inputs.map((input) => (
        <div key={input.name} className="self-center flex flex-col gap-y-1">
          <label
            htmlFor={input.name}
            className="font-medium text-xs min-[500px]:text-[0.9rem] min-[500px]:font-semibold"
          >
            {input.displayName}{" "}
            {input.required && <span className="text-red-600">*</span>}
          </label>
          <input
            className="px-2 py-[0.6rem] mb-2 border border-gray-400 border-opacity-60 focus-visible:outline
        focus-visible:border-none focus-visible:outline-1 focus-visible:outline-gray-400
        placeholder:font-medium placeholder:text-xs placeholder-gray-400
        placeholder-opacity-80"
            onChange={(e) => handleChange(e)}
            type={input.type}
            name={input.name}
            placeholder={input.placeholder}
            required={input.required}
          />
        </div>
      ))}

      <button
        type="submit"
        className="self-center w-fit text-white px-3 py-2 bg-cyan-500 rounded-md"
      >
        Sign Up
      </button>
    </form>
  );
};

export default Register;

{
  /* */
}
