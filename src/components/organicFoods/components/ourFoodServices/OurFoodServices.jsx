import { Link } from "react-router-dom";

const OurFoodServices = () => {
  return (
    <section className="w-full mr-[45px] grid md:grid-cols-2 grid-cols-1 font-futura mb-[45px]">
      <div
        className="md:pt-5 md:pr-[45px] md:pb-10 md:pl-5 py-5 px-[25px] content-center
        flex flex-wrap flex-col justify-center md:order-1 order-2"
      >
        <h3 className="min-[992px]:text-[50px] text-3xl leading-none font-bold mb-[15px] uppercase">
          We'll Give You More for the Floor
        </h3>
        <p
          className="mb-10 text-[18px] tracking-[1.8px] leading-[1.2] font-sans font-thin
          [word-wrap:_break-word]"
        >
          Whether you’re new or growing your selection, we’ll help make the most
          of the products in your store.
        </p>
        <p
          className="mb-5 text-[18px] tracking-[1.8px] leading-[26px] font-sans font-thin
          [word-wrap:_break-word]"
        >
          Guidance on how to demo and merchandise. Education on ingredients,
          trends and unique customer experiences. More service from our team and
          more solutions. All to help you make the right decisions quickly and
          confidently.
        </p>
        <Link
          className="mb-[0.3125rem] text-white bg-black flex items-center justify-center border
        border-black rounded-[10px] font-semibold text-sm leading-5 h-[3.125rem]
        px-5 uppercase before:inline-block before:align-middle transition-colors
        duration-300 hover:bg-white hover:text-black sm:max-w-[300px] w-fit mt-[10px]"
          to="#"
        >
          View Merchandising Services
        </Link>
      </div>
      <img
        src="https://mc-2c2007e7-68ca-4429-8b17-5560-cdn-endpoint.azureedge.net/-/media/alex-lee/md/content/case_studies_img04.jpg?rev=84f3ea7542bb4e529efa4b70846d8d7d&h=620&w=834&la=en&hash=97259DDE91F38E7918105B77A8F707D6"
        alt="shop_img"
        className="md:order-2 order-1 md:h-[700px] h-auto object-cover object-top w-full px-[25px]"
      />
    </section>
  );
};

export default OurFoodServices;
