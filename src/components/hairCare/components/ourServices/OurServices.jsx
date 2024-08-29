import parse from "html-react-parser";
import { useEffect, useState, useRef, useContext } from "react";
import { Context } from "../../../../ContextProvider";

const OurServices = () => {
  const [showMore, setShowMore] = useState(false);
  const [height, setHeight] = useState(0);
  const elementRef = useRef(null);
  const url = import.meta.env.VITE_STORAGE_URL;
  const { state } = useContext(Context);
  const header = state.hairCareData.settings.header2;
  const text = state.hairCareData.settings.text2;
  const image = state.hairCareData.settings.image;
  const sectionStatus = state.hairCareData.settings.section_4_status;
  useEffect(() => {
    if (elementRef.current) {
      const elementHeight = elementRef.current.scrollHeight;
      if (elementHeight > 600) {
        setHeight(elementHeight);
      }
    }
  }, []);
  return (
    Number(sectionStatus) === 1 && (
      <section className="w-full h-full mr-[45px] block font-futura mb-[45px] px-[25px] my-[30px]">
        <img
          src={`${url}/${image}`}
          alt="shop_img"
          className="md:order-2 order-1 md:float-right md:h-[700px] h-auto object-cover object-top
          md:w-1/2 w-full inline md:pl-3 pl-0"
        />
        <div
          ref={elementRef}
          className={`${
            height > 600 &&
            `[transition:_max-height_1s,_opacity_0.2s__0.2s_ease-in-out] ${
              showMore
                ? `md:max-h-[10000px] md:overflow-y-visible`
                : "md:max-h-[300px] md:overflow-y-hidden"
            }`
          }`}
        >
          <h3
            className="min-[992px]:text-[50px] text-3xl leading-none font-bold mb-[15px] uppercase
        mt-5 md:mt-0"
          >
            {header}
          </h3>
          {parse(text)}
        </div>
        {height > 600 && (
          <button
            className="hidden md:flex mb-[0.3125rem] text-white bg-black items-center justify-center border
          border-black rounded-[10px] font-semibold text-sm leading-5 h-[3.125rem]
          px-5 uppercase before:inline-block before:align-middle transition-colors
          duration-300 hover:bg-white hover:text-black sm:max-w-[300px] w-fit mt-4"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Read Less" : "Read More"}
          </button>
        )}
      </section>
    )
  );
};

export default OurServices;
