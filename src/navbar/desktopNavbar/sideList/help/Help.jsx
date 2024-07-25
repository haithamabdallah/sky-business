import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import mail from "./mail-new.svg";
import chat from "./chat.webp";
const Help = () => {
  const [shopOnlineHover, setshopOnlineHover] = useState(false);
  return (
    <li
      className="text-[10px] leading-[14px] cursor-pointer ml-3 pl-3"
      onMouseEnter={() => setshopOnlineHover(true)}
      onMouseLeave={() => setshopOnlineHover(false)}
    >
      <Link to="/contact">HELP</Link>
      {shopOnlineHover && (
        <div
          className="z-50 cursor-default flex flex-col pt-[0.25rem] absolute
        [inset:43px_auto_auto_896px]"
        >
          <section
            className="bg-[#fff] border border-[#d1d1d1] rounded-[0.25rem] max-w-full
                min-w-[9.375rem] p-[0.625rem] relative"
          >
            <ul className="flex">
              <li className="flex border-r border-[#d1d1d1] px-[1.25rem] flex-grow">
                <div>
                  <p className="font-semibold text-[0.875rem]">
                    A QUESTION ?
                  </p>
                  <ul>
                    <li>
                      <p className="text-[#626566] text-[.75rem] leading-[1.5] mt-[0.9375rem]">
                        <Link to="#">FAQs</Link>
                      </p>
                    </li>
                    <li>
                      <p className="text-[#626566] text-[.75rem] leading-[1.5] mt-[0.9375rem]">
                        <Link to="#">Check Order Status</Link>
                      </p>
                    </li>
                    <li>
                      <p className="text-[#626566] text-[.75rem] leading-[1.5] mt-[0.9375rem]">
                        <Link to="#">Shipping & Returns</Link>
                      </p>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="flex border-r border-[#d1d1d1] px-[1.25rem] flex-grow">
                <div>
                  <p className="font-semibold text-[0.875rem]">
                    CONTACT US
                  </p>
                  <ul>
                    <li className="flex items-center mt-[0.9375rem]">
                      <img
                        alt="mail"
                        src={mail}
                        className="mr-4 inline-block"
                        width="20"
                      />
                      <Link
                        to="#"
                        className="text-[#626566] text-[.75rem] leading-[1.5]"
                      >
                        Email Us
                      </Link>
                    </li>
                    <li className="flex items-center mt-[0.9375rem]">
                      <img
                        alt="mail"
                        src={chat}
                        className="mr-4 inline-block"
                        width="20"
                      />
                      <Link
                        to="#"
                        className="text-[#626566] text-[.75rem] leading-[1.5]"
                      >
                        Chat with us
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </section>
        </div>
      )}
    </li>
  );
};

export default Help;
