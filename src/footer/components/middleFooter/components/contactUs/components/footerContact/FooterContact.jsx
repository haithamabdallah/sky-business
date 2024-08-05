import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../../../../../../ContextProvider";

const FooterContact = () => {
  const { value } = useContext(Context);
  const workHours = value.settings.work_hours;
  const phone = value.settings.phone;
  return (
    <section className="lg:pb-10 block pb-0 font-futura lg:mt-0 mt-5">
      <span
        className="lg:font-semibold lg:text-sm lg:leading-5 lg:mb-[0.3125rem] lg:uppercase
    block font-semibold text-sm leading-5 mb-[0.625rem] uppercase text-black"
      >
        Contact us
      </span>
      <span className="text-black text-xs leading-[1.25] m-0">
        <span className="lg:inline-block hidden">Call: {phone}</span>
        <br className="lg:inline-block hidden" />
        <span>{workHours}</span>
        <br />
      </span>
      <br />
      <div
        className="lg:hidden flex flex-row font-futura text-[0.75rem] ml-[13.5px] leading-[1.25]
      m-0"
      >
        <Link
          to="#"
          className="mr-[0.3125rem] bg-white basis-0 flex-grow items-center border
        border-gray-300 rounded-[1.5625rem] flex text-[.875rem] font-semibold
          leading-[1.25rem] font-futura-pt h-[3.125rem] justify-center
          p-0 uppercase
          before:bg-[0] before:bg-no-repeat before:bg-[length:100%] before:mr-[.3125rem] before:mt-0
          before:mb-0 before:ml-0 before:w-[1.1875rem] before:h-[3.125rem] before:inline-block
          before:align-middle
          before:bg-[url('./footer/components/middleFooter/components/contactUs/components/footerContact/assets/phone.svg')]"
        >
          {phone}
        </Link>
        <Link
          to="/contact"
          className="mr-[0.3125rem] bg-white basis-0 flex-grow items-center border
        border-gray-300 rounded-[1.5625rem] flex text-[.875rem] font-semibold
          leading-[1.25rem] font-futura-pt h-[3.125rem] justify-center
          p-0 uppercase
          before:bg-[0] before:bg-no-repeat before:bg-[length:100%] before:mr-[0.625rem] before:mt-0
          before:mb-0 before:ml-0 before:w-[0.75rem] before:h-[3.125rem] before:inline-block
          before:align-middle
          before:bg-[url('./footer/components/middleFooter/components/contactUs/components/footerContact/assets/location.svg')]"
        >
          EMAIL US
        </Link>
      </div>
      <span className="lg:block hidden text-black text-xs leading-[1.25] m-0">
        <Link
          className="mb-[0.3125rem] text-[#000] bg-white flex items-center justify-center border
        border-[#d1d1d1] rounded-[1.5625rem] font-semibold text-sm leading-5 h-[3.125rem]
        px-[0.625rem] uppercase before:inline-block before:align-middle transition-colors
        duration-300 hover:bg-black hover:text-white"
          to="/contact"
        >
          Send an email
        </Link>
      </span>
    </section>
  );
};

export default FooterContact;
