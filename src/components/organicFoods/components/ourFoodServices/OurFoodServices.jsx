import { Link } from "react-router-dom";

import parse from "html-react-parser";

const OurFoodServices = ({ ourFoodServices }) => {
  const url = import.meta.env.VITE_STORAGE_URL;
  return (
    <section className="w-full mr-[45px] grid md:grid-cols-2 grid-cols-1 font-futura mb-[45px] my-[30px]">
      <div
        className="md:pt-5 md:pr-[45px] md:pb-10 md:pl-5 py-5 px-[25px] content-center
        flex flex-wrap flex-col justify-center md:order-1 order-2"
      >
        <h3 className="min-[992px]:text-[50px] text-3xl leading-none font-bold mb-[15px] uppercase">
          {ourFoodServices.header}
        </h3>
        {parse(ourFoodServices.text)}
        <Link
          className="mb-[0.3125rem] text-white bg-black flex items-center justify-center border
        border-black rounded-[10px] font-semibold text-sm leading-5 h-[3.125rem]
        px-5 uppercase before:inline-block before:align-middle transition-colors
        duration-300 hover:bg-white hover:text-black sm:max-w-[300px] w-fit mt-[10px]"
          to="#"
        >
          {ourFoodServices.button}
        </Link>
      </div>
      <img
        src={`${url}/${ourFoodServices.image}`}
        alt="shop_img"
        className="md:order-2 order-1 md:h-[700px] h-auto object-cover object-top w-full px-[25px]"
      />
    </section>
  );
};

export default OurFoodServices;
