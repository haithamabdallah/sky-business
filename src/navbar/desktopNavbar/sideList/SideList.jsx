import { Link } from "react-router-dom";
import WhyShopOnline from "./whyShopOnline/WhyShopOnline";
import Help from "./help/Help";

const SideList = () => {
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
      <WhyShopOnline />
      <Help />
    </ul>
  );
};

export default SideList;
