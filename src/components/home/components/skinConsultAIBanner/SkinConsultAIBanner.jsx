import image1024 from "./1024.webp";
import image768 from "./768.jpg";
import imageRest from "./rest.jpg";
import imageDefault from "./default.jpg";
import { Link } from "react-router-dom";
const SkinConsultAIBanner = () => {
  return (
    <section
      className="lg:my-[3.75rem] px-[1.125rem] md:py-[15px] lg:px-[2.375rem] m-auto py-[10px] 
      w-full relative"
    >
      <picture>
        <source
          sizes="100vw"
          media="(min-width:1024px)"
          width="1500"
          height="742"
          data-aspectratio="2.0215633423180592"
          srcSet={image1024}
        />
        <source
          sizes="100vw"
          media="(min-width:768px)"
          width="1500"
          height="1307"
          data-aspectratio="1.1476664116296864"
          srcSet={image768}
        />
        <source
          sizes="100vw"
          media="(min-width:0)"
          width="800"
          height="697"
          data-aspectratio="1.1477761836441893"
          srcSet={imageRest}
        />
        <img
          alt="SKIN CONSULT AI"
          src={imageDefault}
          width="800"
          height="697"
        />
      </picture>
      <div
        className="flex h-full w-full lg:left-[27.2%] px-[0.9375rem] lg:absolute lg:top-[50%]
        lg:translate-x-[-50%] lg:translate-y-[-50%] mx-auto max-w-[75rem] relative z-50
        justify-center items-center"
      >
        <div className="lg:w-[50%] w-full inline-block lg:py-10 py-5 text-left">
          <h2
            className="lg:text-[2.125rem] text-[1.5rem] lg:leading-[2.125rem] leading-[1.5]
            lg:mb-[.75rem] mb-[0.375rem] [letter-spacing:-.05125rem]"
          >
            SKIN CONSULT AI
          </h2>
          <p className="text-[#000] text-left lg:text-[.875rem] text-[0.75rem] lg:leading-[1.25rem]
          leading-[1rem] pb-[1.625rem]">
            <b>
              YOUR EXPERT SKIN DIAGNOSIS DEVELOPED&nbsp;WITH DERMATOLOGISTS.
            </b>
            <br />
            AN ALGORITHM POWERED BY ARTIFICIAL INTELLIGENCE DECODES YOUR SKIN
            STRENGTHS AND PRIORITIES TO FIND THE RIGHT PROTOCOL FOR YOUR SKIN.
          </p>
          <div>
            <div class="w-full inline-block relative align-top">
              <Link
                to="#"
                className="text-center appearance-none bg-[#000]
                  border border-transparent rounded-[1.5625rem] text-[#fff] cursor-pointer
                  inline-block font-semibold text-[.875rem] leading-[1] min-w-[10.625rem]
                  py-[1.0625rem] px-[.75rem] relative
                  [transition:_background-color_.25s_ease-out,_color_.25s_ease-out] align-middle
                  hover:bg-white hover:text-black hover:border-black"
              >
                START NOW
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkinConsultAIBanner;
