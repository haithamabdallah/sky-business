import { Link } from "react-router-dom";
const Description = () => {
  return (
    <div
      className="flex h-full w-full max-w-[75rem] lg:left-[50%] px-[0.9375rem] lg:absolute lg:top-[50%]
        lg:[transform:translate(-50%,-50%)] mx-auto relative items-center"
    >
      <div className="px-[0.9375rem] lg:w-[50%] w-full inline-block lg:py-10 py-5 text-left">
        <h2
          className="lg:text-[2.125rem] text-[1.5rem] lg:leading-[2.125rem] leading-[1.5]
            lg:mb-[.75rem] mb-[0.375rem] [letter-spacing:-.05125rem]"
        >
          SKIN CONSULT AI
        </h2>
        <p
          className="text-[#000] text-left lg:text-[.875rem] text-[0.75rem] lg:leading-[1.25rem]
          leading-[1rem] pb-[1.625rem]"
        >
          <b>YOUR EXPERT SKIN DIAGNOSIS DEVELOPED&nbsp;WITH DERMATOLOGISTS.</b>
          <br />
          AN ALGORITHM POWERED BY ARTIFICIAL INTELLIGENCE DECODES YOUR SKIN
          STRENGTHS AND PRIORITIES TO FIND THE RIGHT PROTOCOL FOR YOUR SKIN.
        </p>
        <div>
          <div className="w-full inline-block relative align-top">
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
  );
};

export default Description;
