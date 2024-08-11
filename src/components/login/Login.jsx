import { useState, useEffect, Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import sendRequest from "../../methods/fetchData";
import CoverComponent from "../CoverComponent";
import ForgottenPassword from "./components/forgottenPassword/ForgottenPassword";
const Login = ({ loginData }) => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const desktopCover = loginData.settings.cover_desktop;
  const mobileCover = loginData.settings.cover_mobile;

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [key]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await sendRequest({
      method: "post",
      endpoint: "login",
      body: { ...form },
    });
    const result = response.data;
    if (response.status === "success") {
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
      }, 2000);
    }
  }, [errors]);

  return (
    <>
      <CoverComponent desktopCover={desktopCover} mobileCover={mobileCover} />
      <section className="font-futura flex flex-col">
        <form
          onChange={handleChange}
          onSubmit={handleSubmit}
          className="flex flex-col max-w-[75rem] w-[60%] xl:w-[50%] xl:max-w-[800px]
        mx-auto my-[60px]"
        >
          <label className="mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="outline-none w-full px-3 py-2 border border-black mb-4"
            name="email"
            type="email"
            required
          />

          <label className="mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="outline-none w-full px-3 py-2 border border-black mb-4"
            name="password"
            type="password"
            required
          />
          {Object.keys(errors).length > 0 && (
            <small className="w-full py-5 text-red-700 text-center font-semibold mb-4">
              {Object.values(errors).map((error, i) => (
                <Fragment key={`error ${i + 1}`}>
                  <span>{error}</span>
                  <br />
                </Fragment>
              ))}
            </small>
          )}
          <button
            className="text-center w-fit self-center appearance-none bg-[#000]
                  border border-transparent rounded-[1.5625rem] text-[#fff] cursor-pointer
                  text-xl leading-[1] min-w-[10.625rem]
                  py-[1.0625rem] relative
                  [transition:_background-color_.25s_ease-out,_color_.25s_ease-out] align-middle
                  hover:bg-white hover:text-black hover:border-black flex justify-center
                  items-center gap-x-1"
            type="submit"
          >
            Login <span className="flex pt-1 ml-1">{`>`}</span>
          </button>
          <p className="text-black text-center text-xl mt-3">
            or{" "}
            <Link to="/register" className="ml-1 underline underline-offset-2">
              Become a Customer
            </Link>
          </p>
          <ForgottenPassword />
        </form>
      </section>
    </>
  );
};

export default Login;
