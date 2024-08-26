import { useEffect, useState } from "react";
import IntlTelInput from "intl-tel-input/reactWithUtils";
import "intl-tel-input/styles";
const PhoneInput = ({ setForm, input }) => {
  const [number, setNumber] = useState("");

  useEffect(() => {
    setForm((form) => ({ ...form, [input.name]: number }));
  }, [number]);

  return (
    <>
      {/* <label
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
  </label> */}
      <IntlTelInput
        inputProps={{
          name: input.name,
          required: input.required,
          className: `outline-none border-b border-black py-[0.25rem] px-[0.3125rem]
      h-[2.1rem] text-[14px] font-semibold w-full`,
        }}
        onChangeNumber={(currentNumber) => {
          setNumber(currentNumber);
        }}
        initOptions={{
          initialCountry: "ca",
        }}
      />
    </>
  );
};

export default PhoneInput;
