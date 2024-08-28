import { useState, useEffect, Fragment } from "react";
import { inputs } from "./data";
import Input from "../contact/components/contactForm/components/input/Input";
import { Link, useNavigate } from "react-router-dom";
import PageCover from "../innerPages/components/pageCover/PageCover";
import CoverComponent from "../CoverComponent";
import sendRequest from "../../methods/fetchData";
import Loading from "../Loading";
const Register = ({ registerData }) => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const settings = registerData.settings;
  const desktopCover = settings.cover_desktop;
  const mobileCover = settings.cover_mobile;
  const {
    cover_header: headerCover,
    cover_text: textCover,
    is_dark: isDark,
  } = settings;
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

  const handleSubmit = async (e) => {
    setLoading(true);
    const response = await sendRequest({
      method: "post",
      endpoint: "register",
      body: { ...form },
    });
    setLoading(false);
    setErrors({});
    const result = response.data;
    if (response.status === "success") {
      setForm({});
      e.target.reset();
      setMessage(response.message);
      setStatus("success")
      navigate("/thank-you", { state: { message: response.message } });
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

  useEffect(() => {
    if (message.length) {
      setTimeout(() => {
        setMessage("");
        setStatus("");
      }, 5000);
    }
  }, [message]);

  return (
    <div>
      <CoverComponent
        desktopCover={desktopCover}
        mobileCover={mobileCover}
        header={headerCover}
        text={textCover}
        isDark={isDark}
      />
      <div className="my-[3rem] max-w-[75rem] mx-auto px-3 sm:px-0">
        <form
          className="w-full flex flex-col justify-center items-center px-[15px] gap-x-5 gap-y-9"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(e);
          }}
        >
          {inputs.map((input) => (
            <div
              key={input.name}
              className={`flex flex-col ${
                input.type === "textarea" || input.name === "subject"
                  ? "w-[98%]"
                  : "w-[98%] sm:w-[70%] md:w-[60%] lg:w-[50%]"
              } relative`}
            >
              {input.type === "select" ? (
                <Input
                  handleChange={handleChange}
                  input={input}
                  countries={countries}
                />
              ) : (
                <Input
                  handleChange={handleChange}
                  input={input}
                  status={status}
                  setForm={setForm}
                />
              )}
              {errors[input.name]?.length > 0 && (
                <small className="w-full text-left py-1 text-red-700 font-semibold">
                  <span>{errors[input.name][0]}</span>
                </small>
              )}
            </div>
          ))}
          <small className="w-full text-center py-1 text-green-700 font-semibold">
            <span>{message}</span>
          </small>
          <div
            className="w-full flex flex-col justify-center items-center gap-y-4 gap-x-2
            mb-5"
          >
            <Loading loading={loading} />
            <button
              type="submit"
              className="w-fit text-white px-3 py-2
              bg-black rounded-md hover:bg-white hover:text-black transition-colors
              duration-300"
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
