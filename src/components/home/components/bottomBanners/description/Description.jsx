import { Link } from "react-router-dom";
import parse from "html-react-parser";
const Description = ({ header, text, buttonText, buttonStatus, buttonUrl }) => {
  return (
    <div
      className="flex h-full w-full max-w-[75rem] lg:left-[50%] lg:px-[0.9375rem] lg:absolute lg:top-[50%]
        lg:[transform:translate(-50%,-50%)] mx-auto relative items-center font-futura"
    >
      <div className="lg:px-[0.9375rem] lg:mx-0 mx-[15px] lg:w-[50%] w-full inline-block lg:py-10 py-5 text-left">
        {header?.length > 0 && (
          <h2
            className="lg:text-[2.125rem] text-[1.5rem] lg:leading-[2.125rem] leading-[1.5]
            lg:mb-[.75rem] mb-[0.375rem] [letter-spacing:-.05125rem]"
          >
            {header}
          </h2>
        )}
        {text?.length > 0 && (
          <p
            className="text-[#000] text-left lg:text-[.875rem] text-[0.75rem] lg:leading-[1.25rem]
          leading-[1rem] pb-[1.625rem] font-futura"
          >
            {parse(text)}
          </p>
        )}
        {buttonStatus !== 0 && (
          <div>
            <div className="w-full inline-block relative align-top">
              <Link
                to={buttonUrl}
                className="text-center appearance-none bg-[#000]
                  border border-transparent rounded-[1.5625rem] text-[#fff] cursor-pointer
                  inline-block font-semibold text-[.875rem] leading-[1] min-w-[10.625rem]
                  py-[1.0625rem] relative
                  [transition:_background-color_.25s_ease-out,_color_.25s_ease-out] align-middle
                  hover:bg-white hover:text-black hover:border-black"
              >
                {buttonText}
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Description;
