import { useEffect, useState } from "react";
import PhoneInput from "./components/phoneInput/PhoneInput";
const Input = ({ input, handleChange, countries, status, setForm }) => {
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    if (status === "success") setFocus(false);
  }, [status]);

  return input.type === "select" ? (
    <>
      <label
        htmlFor={input.name}
        className="text-[.875rem] font-[inherit] mt-0 mx-0 mb-5"
      >
        {input.displayName} {input.required && <span>*</span>}
      </label>
      <select
        defaultValue=""
        name={input.name}
        className="px-[18px] rounded-[1.5625rem] leading-5 h-[2.1rem]
         bg-[url('./components/contact/components/contactForm/components/input/down-arrow.png')]
        bg-[center_right_18px] bg-[length:12px_12px] bg-no-repeat appearance-none
        border border-black
        focus-visible:outline-none cursor-pointer
        [transition:box-shadow_.2s,border-color_.2s_ease-in-out] text-[16px]"
        onChange={(e) => handleChange(e)}
        required={input.required}
      >
        <option value="" disabled>
          {`Select Country`.toUpperCase()}
        </option>
        {Object.entries(countries).map(([id, name]) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </select>
    </>
  ) : input.type === "textarea" ? (
    <>
      <label
        htmlFor={input.name}
        className={`max-w-full p-[0_.3125rem] overflow-hidden pointer-events-none absolute
              text-left left-0 [transition:transform_.2s,_font-size_.2s,_left_.2s] 
              whitespace-nowrap w-auto z-[1]
            ${
              focus
                ? "h-auto top-[-16px] text-[.6875rem] [transform:translate3d(0,-.5rem,0)] text-[#626566] font-light leading-5"
                : `[transform:translateZ(0)] top-0 h-[3.125rem] text-[12px] font-normal leading-none`
            }`}
      >
        {input.displayName} {input.required && <span>*</span>}
      </label>
      <textarea
        onInput={handleChange}
        onFocus={() => setFocus(true)}
        onBlur={(e) => {
          if (!e.target.value) setFocus(false);
        }}
        type={input.type}
        name={input.name}
        required={input.required}
        maxLength="3498"
        className="outline-none border-b border-black min-h-[60px] pt-[14px] text-[14px] font-semibold"
      ></textarea>
      {/* <small className="text-[#626566] text-[10px] leading-3 ml-auto mt-[6px]">
        Limit to 3498 Characters*
      </small> */}
    </>
  ) : input.name === "phone" || input.name === "business_phone" ? (
    <PhoneInput setForm={setForm} input={input} />
  ) : (
    <>
      <label
        htmlFor={input.name}
        className={`max-w-full p-[0_.3125rem] overflow-hidden pointer-events-none absolute
              text-left left-0 [transition:transform_.2s,_font-size_.2s,_left_.2s] 
              whitespace-nowrap w-auto z-[1]
            ${
              focus
                ? "h-auto top-[-16px] text-[.6875rem] [transform:translate3d(0,-.5rem,0)] text-[#626566] font-light"
                : `[transform:translateZ(0)] top-0 h-[3.125rem] text-[12px] font-normal`
            }`}
      >
        {input.displayName} {input.required && <span>*</span>}
      </label>
      <input
        onChange={(e) => handleChange(e)}
        onFocus={() => setFocus(true)}
        onBlur={(e) => {
          if (!e.target.value) setFocus(false);
        }}
        type={input.type}
        name={input.name}
        required={input.required}
        className="outline-none border-b border-black py-[0.25rem] px-[0.3125rem]
        h-[2.1rem] text-[14px] font-semibold"
      />
    </>
  );
};

export default Input;
