import { Link } from "react-router-dom";
import { products } from "./data";

const Products = () => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 min-[1200px]:grid-cols-3 font-futura">
      {products.map(({ id, name, src, description }) => (
        <li key={id} className="relative px-[25px] mb-10 flex flex-col">
          <img src={src} alt={name} className="w-full" />
          <h2
            className="leading-[0.9] text-center pr-[10px] pl-[20px] pb-[21px]
            h-[55px] uppercase font-bold mt-10"
          >
            {name}
          </h2>
          <div className="absolute top-0 left-0 w-full h-full px-[25px]">
            <div
              className="bg-black w-full h-full text-white
                flex flex-col opacity-0 px-[25px] py-[15px] justify-center transition-opacity duration-700
                hover:opacity-100"
            >
              <h2 className="text-3xl mb-[5px] leading-none [letter-spacing:0] uppercase font-bold">
                {name}
              </h2>
              <p className="text-base leading-[1.29] pt-[10px] font-sans font-thin">
                {description}
              </p>
              {/* <Link
                className="mt-4 min-w-[auto] w-fit [white-space:nowrap] appearance-none bg-white border
              border-transparent rounded-[1.5625rem] text-black cursor-pointer inline-block
              font-semibold text-[0.875rem] leading-4 px-10 py-3 relative
              text-center no-underline transition-colors duration-250 align-middle
              hover:text-white hover:bg-black hover:border-white"
                to="#"
              >
                Details
              </Link> */}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Products;
