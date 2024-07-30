import { Link } from "react-router-dom";

const BottomFooterLinks = () => {
  return (
    <div
      className="lg:flex lg:justify-end lg:mt-[2.1875rem] lg:mx-0 lg:mb-[2.5rem] lg:px-[.9375rem] 
    text-left lg:whitespace-nowrap lg:w-1/3"
    >
      <ul>
        <li className="text-[0.625rem] inline-block leading-[0.875rem]">
          <Link className="text-[0.625rem] leading-[0.875rem]" to="#">
            Terms &amp; Conditions
          </Link>
        </li>
        <li
          className={`text-[0.625rem] inline-block leading-[0.875rem] before:[content:"•"]
          before:py-0 before:px-[0.375rem]`}
        >
          <Link className="text-[0.625rem] leading-[0.875rem]" to="#">
            Site Map
          </Link>
        </li>
        <li
          className={`text-[0.625rem] inline-block leading-[0.875rem] before:[content:"•"]
          before:py-0 before:px-[0.375rem]`}
        >
          <Link className="text-[0.625rem] leading-[0.875rem]" to="#">
            Privacy Policy
          </Link>
        </li>
        <li
          className={`text-[0.625rem] inline-block leading-[0.875rem] before:[content:"•"]
          before:py-0 before:px-[0.375rem]`}
        >
          <Link className="text-[0.625rem] leading-[0.875rem]" to="#">
            Cookie Settings
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default BottomFooterLinks;
