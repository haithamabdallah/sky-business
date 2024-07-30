import { Link } from "react-router-dom";

const FooterContact = () => {
  return (
    <section
      className="lg:border-b-0 lg:pb-10 block border-b-[0.0625rem] border-b-black
    pb-0 font-futura"
    >
      <span
        className="lg:font-semibold lg:text-sm lg:leading-5 lg:mb-[0.3125rem] lg:uppercase
    block font-semibold text-sm leading-5 mb-[0.625rem] uppercase text-black"
      >
        Contact us
      </span>
      <span className="text-black text-xs leading-[1.25] m-0">
        Call 1 888 458 4249
        <br />
        9am - 5pm EST (Mon-Thurs)
        <br />
      </span>
      <br />
      <span className="text-black text-xs leading-[1.25] m-0">
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
