import { inputs } from "../../data";
import Input from "./components/input/Input";
import { useState } from "react";
const ContactForm = () => {
  const [form, setForm] = useState({});
  const handleChange = (e) => {
    const key = e.target.name;
    const value = key === "receive_emails" ? e.target.checked : e.target.value;
    setForm({ ...form, [key]: value });
  };

  const handleSubmit = () => {
    console.log(`Sending form`);
    console.log({ form });
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
            input.type === "textarea"
              ? "w-[98%]"
              : "w-[98%] min-[532px]:w-[48%]"
          } relative self-end`}
        >
          <Input handleChange={handleChange} input={input} />
        </div>
      ))}
      <div className="flex gap-x-[10px] w-[98%]">
        <input
          className="appearance-none w-[18px] h-[18px] border border-black bg-white
          cursor-pointer checked:bg-[url('./components/contact/components/contactForm/correct.svg')]
          bg-[center] bg-[length:18px_18px] bg-no-repeat"
          onChange={(e) => handleChange(e)}
          type="checkbox"
          name="receive_emails"
        />
        
        <small
          className={`flex-auto ${
            form.receive_emails ? "font-semibold" : "font-normal"
          } leading-5 text-[12px]`}
        >
          Yes, sign me up for <span className="font-bold">Emails</span>
          <br />
          <span className="text-[10px]">
            I expressly consent to receiving exclusive news, promotions and
            opportunities for engagement from Vichy Canada via electronic
            messages. I understand that I may withdraw my consent at any time
            from receiving any or all such electronic messages.
          </span>
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
