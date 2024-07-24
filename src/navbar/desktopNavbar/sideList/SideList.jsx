import { useState } from "react";
import { Link } from "react-router-dom";
import { list } from "./data";
const SideList = () => {
  const [shopOnlineHover, setshopOnlineHover] = useState(false);
  return (
    <ul className="flex items-center gap-x-2 font-futura">
      <li>
        <button
          className="font-futuraBook text-[12px] leading-5 text-[#404040]
              border border-[#404040] hover:[box-shadow:inset_0_0_0_.0625rem_#000]
              rounded-[1.5625rem] pr-5 pl-[0.625rem] flex items-center py-[14px]
              after:h-[0.625rem] after:w-[0.625rem] after:bg-black
              after:[mask:url(./navbar/desktopNavbar/chevron-down.svg)_no-repeat_left/100%]"
        >
          {`C$ - CA (EN)`}
        </button>
      </li>
      <li className="text-[10px] leading-[14px]">
        <Link to="#">
          <span
            className="flex items-center gap-x-[.3125rem] order-2
                before:bg-black before:h-[0.8125rem] before:w-[0.6875rem] before:order-3 before:block
                before:[mask:url(./navbar/desktopNavbar/pin.svg)_no-repeat_left_center/100%]"
          >
            FIND A STORE
          </span>
        </Link>
      </li>
      <li
        className="text-[10px] leading-[14px] cursor-pointer"
        onMouseEnter={() => setshopOnlineHover(true)}
        onMouseLeave={() => setshopOnlineHover(false)}
      >
        WHY SHOP ONLINE
        {shopOnlineHover && (
          <div className="cursor-default max-w-[1200px] absolute [inset:43px_auto_auto_81px]">
            <section
              className="bg-[#fff] border border-[#d1d1d1] rounded-[0.25rem] max-w-full
                min-w-[9.375rem] p-[0.625rem] relative"
            >
              <ul className="mt-[30px] mx-[-10px] mb-5 w-[1170px] flex">
                {list.map((item) => (
                  <li className="flex border-r border-[#d1d1d1] px-[1.25rem] flex-grow basis-[100%]">
                    <div className="flex items-start">
                      <img
                        class="flex-shrink-0 mr-[1.25rem]"
                        alt={item.alt}
                        src={item.src}
                        width="80"
                      />
                      <div>
                        <p className="font-futuraBook font-bold text-[0.875rem]">
                          <strong>{item.strongText}</strong>
                        </p>
                        <p className="text-[#626566] text-[.75rem] leading-[1.5] mt-[0.9375rem]">
                          {item.normalText}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        )}
      </li>
    </ul>
  );
};

export default SideList;
