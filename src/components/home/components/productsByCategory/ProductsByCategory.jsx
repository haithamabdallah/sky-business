import { Link } from "react-router-dom";
import { categories } from "./data";

const ProductsByCategory = () => {
  return (
    <section
      className="w-full flex flex-wrap justify-center px-0 lg:px-[46px] mt-[66px] 
      gap-x-[15px] lg:gap-x-[30px] gap-y-[17px] font-futura"
    >
      <p className="w-full text-2xl lg:text-[34px] text-center leading-6 lg:leading-[34px] mb-10">
        EXPLORE PRODUCTS BY CATEGORY
      </p>
      {categories.map((category, i) => (
        <div
          key={`category ${i + 1}`}
          className="flex flex-col gap-y-[27px] max-w-auto w-[46%] min-[230px]:w-[40%] lg:max-w-[22%] lg:w-auto"
        >
          <Link to={category.link}>
            <img src={category.src} alt={category.name} />
          </Link>
          <p className="w-full text-sm text-center leading-[14px] lg:leading-6 font-semibold">
            {category.name.toUpperCase()}
          </p>
        </div>
      ))}
    </section>
  );
};

export default ProductsByCategory;
