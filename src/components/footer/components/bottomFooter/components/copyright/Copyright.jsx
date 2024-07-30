import { Link } from "react-router-dom";

const Copyright = () => {
  return (
    <div
      className="lg:mr-auto lg:py-[2.1875rem] lg:w-2/3 font-futura text-[0.625rem]
      leading-[0.875rem] text-black mt-0 mr-0 ml-0 mb-[0.3125rem]"
    >
      <p>
        © Copyright 2024 Vichy Laboratoires
        <br />
        This site is intended for Canadian consumers. Cookies and related
        technology are used for advertising.
        <br />
        To learn more visit our&nbsp;
        <Link className="underline" to="#">
          Privacy Policy
        </Link>
        .&nbsp;
      </p>
    </div>
  );
};

export default Copyright;
