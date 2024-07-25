import { Link } from "react-router-dom";
import WhyShopOnline from "./whyShopOnline/WhyShopOnline";
import Help from "./help/Help";
import Mail from "./mail/Mail";
import Cart from "./cart/Cart";

const SideList = () => {
  return (
    <ul className="flex items-center font-futura">
      <li className="ml-3 pl-3">
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
      <li className="text-[10px] leading-[14px] ml-3 pl-3">
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
      <Mail />
      <li className="ml-3 pl-3">
        <button className="bg-black rounded-[0.25rem] text-white my-[-0.5rem] py-2 px-[0.625rem]">
          <Link to="#">
            <span
              className="block leading-[1] text-center before:bg-white before:inline-block
             before:h-4 before:w-4
             before:[mask:url(./navbar/desktopNavbar/sideList/user.svg)_no-repeat_center/contain]"
            ></span>
          </Link>
        </button>
      </li>
      <Cart />
    </ul>
  );
};

export default SideList;
