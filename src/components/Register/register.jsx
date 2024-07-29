import { useState, useEffect } from "react";
import axios from "axios";
import { inputs } from "./data";
import Input from "./components/input/Input";
import { Link, useNavigate } from "react-router-dom";
const Register = () => {
  const [form, setForm] = useState({});
  const [error, setError] = useState("");
  const [data, setData] = useState({});
  const [countries, setCountries] = useState("");

  const navigate = useNavigate();
  useEffect(() => {
    const fetchCountries = async () => {
      const result = await fetch(`${process.env.VITE_API_URL}/register`)
        .then((res) => res.json())
        .then((res) => res);
      if (result.status === "success") setCountries(result.data.countries);
    };
    fetchCountries();
  }, []);

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [key]: value });
  };

  const handleSubmit = async () => {
    console.log(`Sending form`);
    console.log(
      JSON.stringify({
        business_name: form.business_name,
        first_name: form.first_name,
        last_name: form.last_name,
        business_phone: form.business_phone,
        address_line1: form.address_line1,
        city: form.city,
        country_id: form.country_id,
        postal_code: form.postal_code,
        email: form.email,
        email_confirmation: form.email_confirmation,
        password: form.password,
        password_confirmation: form.password_confirmation,
      })
    );
    const result = await axios
      .post(`${process.env.VITE_API_URL}/register`, {...form})
      .then((res) => res.data)
      .then((res) => res)
      .catch((error) => error.response.data);
    if (result.status === "success") {
      localStorage.setItem("token", result.data.token);
      navigate("/");
    } else {
      console.log("hello", result);
      setError(result.data);
    }
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
          {input.type === "select" ? (
            <Input
              handleChange={handleChange}
              input={input}
              countries={countries}
            />
          ) : (
            <Input handleChange={handleChange} input={input} />
          )}
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
