import { useState, useEffect, Fragment } from "react";
import { inputs } from "./data";
import Input from "./components/input/Input";
import { Link, useNavigate } from "react-router-dom";
import PageCover from "../innerPages/components/pageCover/PageCover";
import CoverComponent from "../CoverComponent";
import sendRequest from "../../methods/fetchData";

const Register = ({ registerData }) => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [countries, setCountries] = useState("");

  const navigate = useNavigate();

  const desktopCover = registerData.settings.cover_desktop;
  const mobileCover = registerData.settings.cover_mobile;
  useEffect(() => {
    const fetchCountries = async () => {
      const result = await sendRequest({ method: "get", endpoint: "register" });
      if (result.status === "success") {
        setCountries(result.data.countries);
      }
    };
    fetchCountries();
  }, []);

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setForm({ ...form, [key]: value });
  };

  const handleSubmit = async () => {
    const response = await sendRequest({
      method: "post",
      endpoint: "register",
      body: { ...form },
    });
    const result = response.data;
    if (response.status === "success") {
      console.log("here");
      navigate("/");
      localStorage.setItem("token", result.token);
    } else {
      console.log({ result });
      setErrors(result);
    }
  };

  useEffect(() => {
    console.log({ errors });
    if (Object.keys(errors).length) {
      setTimeout(() => {
        setErrors({});
      }, 2000);
    }
  }, [errors]);

  return (
    <div>
      <CoverComponent desktopCover={desktopCover} mobileCover={mobileCover} />
      <div className="my-[3rem]">
        <form
          className="flex flex-col gap-y-2 px-0 sm:px-4"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          {inputs.map((input) => (
            <div
              key={input.name}
              className="self-center flex flex-col gap-y-1 w-[80%] min-[500px]:w-[50vw]
              sm:w-[50vw] md:w-[40vw] lg:w-[30vw]"
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
          {Object.keys(errors).length > 0 && (
            <small className="w-full py-5 text-red-700 text-center font-semibold">
              {Object.values(errors).map((error, i) => (
                <Fragment key={`error ${i + 1}`}>
                  <span>{error}</span>
                  <br />
                </Fragment>
              ))}
            </small>
          )}
          <div
            className="flex flex-wrap justify-center sm:justify-between items-center gap-y-4 gap-x-2 mx-auto w-[80%]
            min-[500px]:w-[50vw] sm:w-[50vw] md:w-[40vw] lg:w-[30vw] mb-5"
          >
            <button
              type="submit"
              className="w-fit text-white px-3 py-2
              bg-black rounded-md"
            >
              Sign Up
            </button>
            <p className="col-span-2">
              Returning Customer?{" "}
              <Link to="/login" className="text-black font-semibold">
                Login →
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
