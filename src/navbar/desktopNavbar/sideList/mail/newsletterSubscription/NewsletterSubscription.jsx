import React, { useState } from "react";
import { Link } from "react-router-dom";

const NewsletterSubscription = () => {
  const [foucs, setFoucs] = useState(false);
  const [email, setEmail] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [message, setMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    setCheckbox(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      className="flex flex-col items-end gap-x-5 gap-y-11 px-2 ml-auto mt-7 font-futura"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <p className="w-full text-[12px] leading-[18px] text-[rgb(98,101,102)">
        {`Required fields are marked with an asterisk (*)`}
      </p>

      <div className={`w-full flex flex-col relative`}>
        <label
          htmlFor="email"
          className={`max-w-full p-[0_.3125rem] overflow-hidden pointer-events-none absolute
              text-left left-0 [transition:transform_.2s,_font-size_.2s,_left_.2s] 
              whitespace-nowrap w-auto z-[1]
            ${
              foucs
                ? "top-[-16px] text-[.6875rem] [transform:translate3d(0,-.5rem,0)] text-[#626566] font-light"
                : `[transform:translateZ(0)] top-0 h-[3.125rem] text-black text-[12px] font-normal`
            }`}
        >
          Email address <span>*</span>
        </label>
        <input
          onChange={(e) => handleEmailChange(e)}
          onFocus={() => setFoucs(true)}
          onBlur={(e) => {
            if (!e.target.value) setFoucs(false);
          }}
          type="email"
          name="email"
          required
          autoFocus
          className="outline-none border-b border-black py-[0.25rem] px-[0.3125rem]
          h-[2.1rem] text-[14px] font-semibold"
        />
      </div>
      <div className="flex gap-x-[10px]">
        <input
          className="appearance-none w-[18px] h-[18px] border border-black bg-white
          cursor-pointer checked:bg-[url('./components/contact/components/contactForm/correct.svg')]
          bg-[center] bg-[length:18px_18px] bg-no-repeat"
          onChange={(e) => handleCheckboxChange(e)}
          type="checkbox"
          name="receive_emails"
        />
        <small
          className={`flex-auto ${
            checkbox ? "font-semibold" : "font-normal"
          } leading-5 text-[12px] w-[70%]`}
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
      <div className="w-full flex flex-col items-start gap-y-[26px]">
        <p className="text-[#626566] text-sm leading-[21px]">
          By using this service, I expressly consent to my data being used in
          accordance to the{" "}
          <Link to="#" className="underline">
            Privacy Policy
          </Link>
          .{" "}
          <Link to="/contact" className="underline">
            Contact
          </Link>{" "}
          us for more details.
        </p>
        <button
          className="rounded-[1.5625rem] px-3 py-5 bg-black text-white text-sm
          leading-[14px] mb-3 font-semibold border border-black hover:bg-white
          hover:text-black transition-colors duration-200"
          type="submit"
        >
          SIGN UP
        </button>
      </div>
    </form>
  );
};

export default NewsletterSubscription;
