import { useState, useEffect } from "react";
import { inputs } from "./data";
import Input from "./components/input/Input";
import { Link } from "react-router-dom";
const Register = () => {
  const [form, setForm] = useState({});
  const [error, setError] = useState("");
  const [data, setData] = useState({});
  // const [countries, setCountries] = useState("");
  // useEffect(() => {
  // const fetchCountries = async () =>
  //   await fetch(process.env.API_URL)
  //     .then((res) => res.json())
  //     .then(res => res);
  //   console.log({ api_url: process.env.API_URL });
  // }, []);

  // useEffect(() => {
  //   const postRegister = async () => {
  //     const result = await fetch(process.env.API_URL, {
  //       method: "POST",
  //       body: JSON.stringify({ form }),
  //     })
  //       .then((res) => res.json())
  //       .then((res) => res);
  //     if (result.status === "success") {
  //       setData(result.data);
  //     } else {
  //       setError(result.data);
  //     }
  //   };
  // });
  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
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
        <div
          key={input.name}
          className="self-center flex flex-col gap-y-1 w-auto min-[500px]:w-[30vw]"
        >
          <label
            htmlFor={input.name}
            className="font-medium text-xs min-[500px]:text-[0.9rem] min-[500px]:font-semibold"
          >
            {input.displayName}{" "}
            {input.required && <span className="text-red-600">*</span>}
          </label>
          <Input handleChange={handleChange} input={input} />
        </div>
      ))}
      <div className="flex flex-wrap self-center gap-2 items-center w-auto min-[500px]:w-[30vw] mb-5">
        <button
          type="submit"
          className="self-center w-fit text-white px-3 py-2 bg-cyan-500 rounded-md"
        >
          Sign Up
        </button>
        <p className="ml-auto">
          Returning Customer?{" "}
          <Link to="/login" className="text-cyan-700">
            Login →
          </Link>
        </p>
      </div>
    </form>
  );
};

export default Register;
