import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import sendRequest from "../../../../../../../methods/fetchData";

const Newsletter = () => {
  const checkbox = useRef(null);
  const [focus, setFocus] = useState(false);
  const [checked, setChecked] = useState(false);
  const [form, setForm] = useState({});
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setMessage("");
      setStatus("");
    }, 2000);
  }, [message]);
  return (
    <div className="bg-transparent pt-0 lg:pt-0 font-futura">
      <div className="text-[#626566]">
        <h2
          className="text-[#000] block lg:hidden mb-[.9375rem]
          [font:_600_.875rem_/_1.25rem_Futura_PT_Medium,_sans-serif]"
        >
          CONNECT WITH US
        </h2>
        <form
          onChange={(e) => {
            const key = e.target.name;
            const value = e.target.value;
            setForm({ ...form, [key]: value });
          }}
          onSubmit={(e) => {
            e.preventDefault();
            sendRequest({
              method: "get",
              endpoint: "subscribe",
              params: { ...form },
            }).then((data) => {
              e.target.reset();
              setForm({});
              setChecked(false);
              setMessage(data.message);
              setStatus(data.status);
            });
          }}
        >
          <p className="text-[0.75rem] lg:leading-[3rem] leading-[3rem] mb-2">
            Sign Up To Receive The Latest News And Special Offers
          </p>
          <div className="flex items-start flex-grow mx-[-0.625rem] text-[#626566] mb-[0.625rem]">
            <div
              className="mx-[0.625rem] mb-5 relative flex items-start flex-grow flex-wrap
            basis-full"
            >
              <input
                className="appearance-none bg-white border-none rounded-none
                shadow-[0_0.0625rem_0_0_#000] box-border text-black block font-semibold
                text-[0.875rem] leading-normal h-[3.125rem] px-[0.25rem] pl-[0.3125rem]
                [transition:_box-shadow_.2s,_border-color_.2s_ease-in-out] w-full
                focus:border-none focus:[box-shadow:_0_.0625rem_0_0_#000] outline-none
                focus:[transition:_box-shadow_.2s,_border-color_.2s_ease-in-out]"
                type="email"
                name="email"
                required
                onFocus={() => setFocus(true)}
                onBlur={(e) => {
                  if (!e.target.value) setFocus(false);
                }}
              />
              <label
                htmlFor="email"
                className={`text-black left-0 max-w-full overflow-hidden pointer-events-none
                absolute text-left truncate top-0 [transform:_translateZ(0)]
                [transition:_transform_.2s,_font-size_.2s,_left_.2s] duration-200 whitespace-nowrap
                w-auto z-10 cursor-pointer block
                 ${
                   focus
                     ? "h-auto top-[-16px] text-[.6875rem] [transform:translate3d(0,-.5rem,0)] text-[#626566] font-light"
                     : `[transform:translateZ(0)] top-0 h-[3.125rem] text-[12px] font-normal`
                 }`}
              >
                Email address
                <span className="text-[0.875rem] text-[#000] leading-[3.125rem] font-futura">
                  *
                </span>
              </label>
            </div>
          </div>
          <div className="flex items-start flex-grow mx-[-0.625rem] flex-wrap">
            <div className="[flex:1_1_100%] mx-[0.625rem] mb-5 flex items-start flex-wrap relative">
              <input
                className="h-5 mt-0 w-5 cursor-pointer left-0 opacity-0 absolute
                overflow-visible text-[100%] leading-[1.15] m-0 [font-family:inherit]"
                type="checkbox"
                name="checkbox"
                required
                ref={checkbox}
              />
              <label
                className={`text-[#000] pl-[1.875rem] inline-block text-[0.75rem] leading-[1.25rem]
                [outline-width:0] w-auto cursor-pointer m-0 relative
                before:content-[''] before:bg-white before:border before:border-[#525252]
                before:absolute before:w-[1.25rem] before:h-[1.25rem] before:left-0
                before:top-0 [transition:_box-shadow_.2s,_border-color_.2s_ease-in-out]
                before:inline-block before:align-top ${
                  checked
                    ? `before:bg-[url('./components/contact/components/contactForm/correct.svg')]
                    before:bg-[50%] before:bg-no-repeat before:[background-size:111.11111%]
                    before:border before:border-[#000] font-semibold`
                    : ""
                }`}
                htmlFor="checkbox"
                onClick={(e) => {
                  setChecked(!checked);
                  checkbox.current.checked = !checked;
                }}
              >
                Yes, sign me up for <strong>Emails*</strong>
                {/* <br /> */}
                {/* <small className="text-[80%] leading-[inherit]">
                  I expressly consent to receiving exclusive news, promotions
                  and opportunities for engagement from Vichy Canada via
                  electronic messages. I understand that I may withdraw my
                  consent at any time from receiving any or all such electronic
                  messages.
                </small>
                <span className="text-[0.875rem]">*</span> */}
              </label>
            </div>
          </div>
          {/* <span className="text-[#626566] text-[14px] leading-[21px]">
            By using this service, I expressly consent to my data being used in
            accordance to the{" "}
            <Link className="underline" target="_blank" to="#">
              Privacy Policy
            </Link>
            .{" "}
            <Link className="underline" target="_blank" to="/contact">
              Contact us
            </Link>{" "}
            for more details.
          </span> */}
          {/* <hr className="mb-5" /> */}
          <div className="mb-5 flex items-start [flex:1_1_100%] flex-wrap">
            {message.length > 0 && status === "success" && (
              <small className="w-full py-5 text-green-700 text-[1rem]">
                {message}
              </small>
            )}
            {message.length > 0 && status === "error" && (
              <small className="w-full py-5 text-red-700 text-[1rem]">
                {message}
              </small>
            )}
            {/* {message.length > 0 && <br/>} */}
            <button
              className="min-w-[auto] [white-space:nowrap] appearance-none bg-black border
              border-transparent rounded-[1.5625rem] text-white cursor-pointer inline-block
              font-semibold text-[0.875rem] leading-4 py-[1.0625rem] px-[0.75rem] relative
              text-center no-underline uppercase transition-colors duration-250 align-middle
              hover:text-black hover:bg-white hover:border-black"
              type="submit"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
      <hr className="mb-5" />
    </div>
  );
};

export default Newsletter;
