import sendRequest from "../../../../methods/fetchData";
import { inputs } from "../../data";
import Input from "./components/input/Input";
import { useState, useEffect, Fragment } from "react";
const ContactForm = () => {
  const [form, setForm] = useState({});
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setTimeout(() => {
      setMessage("");
    }, 2000);
  }, [message]);

  useEffect(() => {
    if (Object.keys(errors).length) {
      setTimeout(() => {
        setErrors({});
      }, 2000);
    }
  }, [errors]);

  const handleChange = (e) => {
    const key = e.target.name;
    if (key === "receive_emails") return;
    const value = e.target.value;
    setForm({ ...form, [key]: value });
  };

  const handleSubmit = () => {
    console.log(`Sending form`);
    sendRequest({
      method: "post",
      endpoint: "contact-us",
      body: { ...form },
    }).then((data) => {
      if (data.status === "success") {
        setMessage(data.message);
      } else {
        setErrors(data.errors);
      }
    });
  };
  return (
    <form
      className="w-full flex flex-wrap justify-center items-center gap-x-5 gap-y-9"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <p className="w-full text-center text-[12px] leading-[18px] text-[rgb(98,101,102)">
        {`Required fields are marked with an asterisk (*)`}
      </p>

      {inputs.map((input) => (
        <div
          key={input.name}
          className={`flex flex-col ${
            input.type === "textarea" || input.name === "subject"
              ? "w-[98%]"
              : "w-[98%] min-[532px]:w-[48%]"
          } relative self-start`}
        >
          <Input handleChange={handleChange} input={input} />
          {errors[input.name]?.length > 0 && (
            <small className="w-full py-1 text-red-700 font-semibold">
              <span>{errors[input.name][0]}</span>
              <br />
            </small>
          )}
        </div>
      ))}
      <div className="flex flex-wrap w-[98%]">
        {message.length > 0 && (
          <small className="w-full py-5 text-green-700 text-[1rem]">
            {message}
          </small>
        )}

        <input
          className="appearance-none w-[18px] h-[18px] border border-black bg-white
          cursor-pointer checked:bg-[url('./components/contact/components/contactForm/correct.svg')]
          bg-[center] bg-[length:18px_18px] bg-no-repeat"
          onChange={(e) => handleChange(e)}
          type="checkbox"
          name="receive_emails"
          required
        />

        <small
          className={`w-[80%] ${
            form.receive_emails ? "font-semibold" : "font-normal"
          } leading-5 text-[12px] ml-[0.5rem]`}
        >
          Yes, sign me up for <span className="font-bold">Emails</span>
          <br />
        </small>
      </div>
      <div className="w-[98%] justify-start">
        <button
          className="rounded-[1.5625rem] px-16 py-5 bg-black text-white text-sm
          leading-[14px] mb-3 font-semibold border border-black hover:bg-white
          hover:text-black transition-colors duration-200"
          type="submit"
        >
          SEND
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
