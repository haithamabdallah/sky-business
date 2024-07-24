import { useState } from "react";
import { list } from "./data";

const WhyShopOnline = () => {
  const [shopOnlineHover, setshopOnlineHover] = useState(false);
  return (
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
  );
};

export default WhyShopOnline;
