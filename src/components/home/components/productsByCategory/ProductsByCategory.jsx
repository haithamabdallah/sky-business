import { Link } from "react-router-dom";
import structureData from "./helper";

const ProductsByCategory = ({ categories, explore }) => {
  const url = import.meta.env.VITE_STORAGE_URL;
  const categoriesInfo = structureData(categories, explore);
  return (
    <section
      className="max-w-[1200px] m-auto flex flex-wrap justify-center px-0 mt-[66px]
      gap-[15px] lg:gap-[30px] font-futura pb-[80px]"
    >
      <h2 className="w-full font-normal text-2xl lg:text-[34px] text-center leading-6 lg:leading-[34px] mb-[40px]">
        EXPLORE brands BY CATEGORY
      </h2>
      {categoriesInfo.map((categoryInfo) => (
        <div
          key={categoryInfo.id}
          className="flex flex-col rounded-[.5625rem] overflow-hidden gap-y-[27px] max-w-auto w-[46%] min-[230px]:w-[40%] lg:max-w-[22.5%] lg:w-auto "
        >
          <Link to="#" className="flex flex-col gap-y-[20px] h-zoom-in">
            <div className="rounded-[.5625rem] overflow-hidden ">
              <img
                src={`${url}/${categoryInfo.image}`}
                alt={`${categoryInfo.category} image`}
              />
            </div>
            <span className="w-full text-sm text-center leading-[14px] lg:leading-6 font-semibold">
              {categoryInfo.category.toUpperCase()}
            </span>
          </Link>
        </div>
      ))}
    </section>
  );
};

export default ProductsByCategory;
