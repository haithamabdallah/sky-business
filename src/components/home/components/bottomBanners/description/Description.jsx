import { Link } from "react-router-dom";
import parse from "html-react-parser";
const Description = ({
  header,
  text,
  buttonText,
  buttonStatus,
  buttonUrl,
  isSlider,
  isCover,
  isDark,
}) => {
  console.log({ buttonStatus });
  return (
    (header?.length > 0 || text?.length > 0 || Number(buttonStatus) === 1) && (
      <div
        className={`h-full w-full max-w-[75rem] pointer-events-none  mx-auto
        relative items-center
        font-futura flex ${
          isCover
            ? `md:px-[0.9375rem]
              md:absolute md:top-[50%] md:left-[50%] md:[transform:translate(-50%,-50%)]`
            : `lg:px-[0.9375rem] lg:left-[50%]
              lg:absolute lg:top-[50%] lg:[transform:translate(-50%,-50%)]`
        }`}
      >
        <div
          className={`mx-0 w-full inline-block lg:py-10
          py-5 ${
            isSlider
              ? "px-4 text-center lg:w-[50%] lg:text-left"
              : "text-left lg:w-[50%]"
          } ${
            isCover ? "px-4 md:w-[50%]" : "lg:px-[0.9375rem] lg:w-[50%] px-0"
          }`}
        >
          {header?.length > 0 && (
            <h2
              className={`[letter-spacing:-.05125rem] pointer-events-auto
            ${
              isCover
                ? `md:text-[2.125rem] text-[1.5rem] md:leading-[2.125rem] leading-[1.5]
                md:mb-[.75rem] mb-[0.375rem] md:w-[90%] w-auto`
                : `lg:text-[2.125rem] text-[1.5rem] lg:leading-[2.125rem] leading-[1.5]
                lg:mb-[.75rem] mb-[0.375rem] w-auto`
            } ${isSlider ? "lg:w-[90%] w-auto" : "w-auto"} ${
                isDark ? "lg:text-white text-black" : "text-black"
              }`}
            >
              {header}
            </h2>
          )}
          {text?.length > 0 && (
            <p
              className={`text-[#000] lg:text-[.875rem] text-[0.75rem] lg:leading-[1.25rem]
              leading-[1rem] pb-[1.625rem] font-futura pointer-events-auto ${
                isCover ? "md:w-[90%] w-auto" : "w-auto"
              } ${isSlider ? "lg:w-[90%] w-auto" : "w-auto"}
              ${isDark ? "lg:text-white text-black" : "text-black"}`}
            >
              {parse(text)}
            </p>
          )}
          {Number(buttonStatus) === 1 && (
            <div>
              <div
                className={`w-full inline-block relative align-top
              ${isSlider && "flex justify-center lg:block"}`}
              >
                <Link
                  to={buttonUrl}
                  className={`text-center pointer-events-auto appearance-none
                  border border-transparent rounded-[1.5625rem] cursor-pointer
                  inline-block font-semibold text-[.875rem] leading-[1] min-w-[10.625rem]
                  py-[1.0625rem] relative
                  [transition:_background-color_.25s_ease-out,_color_.25s_ease-out] align-middle
                  
                  ${
                    isDark
                      ? `lg:bg-[#fff] lg:text-[#000] lg:hover:bg-black lg:hover:text-white
                      lg:hover:border-[#fff] bg-[#000] text-[#fff] hover:bg-white
                      hover:text-black hover:border-black`
                      : `bg-[#000] text-[#fff] hover:bg-white hover:text-black hover:border-black`
                  }`}
                >
                  {buttonText}
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  );
};

export default Description;
