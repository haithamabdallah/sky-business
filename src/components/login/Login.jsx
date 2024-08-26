import { useState, useEffect, Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import sendRequest from "../../methods/fetchData";
import Input from "../contact/components/contactForm/components/input/Input";
import ForgottenPassword from "./components/forgottenPassword/ForgottenPassword";
import Loading from "../Loading";
const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const inputs = [
    {
      name: "email",
      displayName: "Email",
      type: "email",
      required: true,
    },

    {
      name: "password",
      displayName: "Password",
      type: "password",
      required: true,
    },
  ];
  const navigate = useNavigate();

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [key]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const response = await sendRequest({
      method: "post",
      endpoint: "login",
      body: { ...form },
    });
    setLoading(false);
    const result = response.data;
    if (response.status === "success") {
      setForm({ email: "", password: "" });
      e.target.reset();
      navigate("/");
      localStorage.setItem("token", result.token);
    } else {
      setErrors(result);
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length) {
      setTimeout(() => {
        setErrors({});
      }, 5000);
    }
  }, [errors]);

  return (
    <>
      <div
        className="flex justify-center items-center w-full min-h-[148.75px] px-[15px] font-futura
      text-[36px] bg-black text-white"
      >
        Login
      </div>
      <section
        className="font-futura max-w-[75rem] mx-auto flex flex-col justify-center items-center
      my-12"
      >
        <form
          onChange={handleChange}
          onSubmit={handleSubmit}
          className="w-full flex flex-col justify-center items-center gap-x-5 gap-y-9"
        >
          {inputs.map((input) => (
            <div
              key={input.name}
              className={`flex flex-col ${
                input.type === "textarea" || input.name === "subject"
                  ? "w-[98%]"
                  : "w-[80%] min-[532px]:w-[50%]"
              } relative`}
            >
              <Input handleChange={handleChange} input={input} />
            </div>
          ))}
          {Object.keys(errors).length > 0 && (
            <small className="w-full text-red-700 py-1 text-center font-semibold">
              {Object.values(errors).map((error, i) => (
                <Fragment key={`error ${i + 1}`}>
                  <span>{error}</span>
                  <br />
                </Fragment>
              ))}
            </small>
          )}
          <div className="flex flex-col items-center">
            <Loading loading={loading} />
            <button
              className="text-center w-fit self-center appearance-none bg-[#000]
                  border border-transparent rounded-[1.5625rem] text-[#fff] cursor-pointer
                  leading-[1] py-2 px-4 relative
                  [transition:_background-color_.25s_ease-out,_color_.25s_ease-out] align-middle
                  hover:bg-white hover:text-black hover:border-black flex justify-center
                  items-center gap-x-1 mt-4"
              type="submit"
            >
              Login <span className="flex pt-1 ml-1">{`>`}</span>
            </button>
            <p className="text-black text-center mt-3">
              or{" "}
              <Link
                to="/register"
                className="ml-1 underline underline-offset-2"
              >
                Become a Customer
              </Link>
            </p>
            <ForgottenPassword />
          </div>
        </form>
      </section>
    </>
  );
};

export default Login;
