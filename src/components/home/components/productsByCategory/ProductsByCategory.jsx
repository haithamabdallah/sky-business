import { Link } from "react-router-dom";
import structureData from "./helper";
import LeftToRightAnimation from "../../../../animationComponents/leftToRightAnimation/LeftToRightAnimation";
import { Context } from "../../../../ContextProvider";
import { useContext } from "react";
const ProductsByCategory = () => {
  const url = import.meta.env.VITE_STORAGE_URL;
  const { state } = useContext(Context);
  const categories = state.homeData.categories;
  const explore = state.homeData.settings.explore;
  const categoriesInfo = structureData(categories, explore);
  return (
    <section
      className="max-w-[1200px] m-auto flex flex-wrap justify-center px-0 my-[60px]
      gap-[15px] lg:gap-[30px] font-futura"
    >
      <h2 className="w-full font-normal text-2xl lg:text-[34px] text-center leading-6 lg:leading-[34px] mb-[40px]">
        EXPLORE BY CATEGORY
      </h2>
      {categoriesInfo.map((categoryInfo, index) => (
        <LeftToRightAnimation key={categoryInfo.id} index={index}>
          <div
            className="flex flex-col rounded-[.5625rem] overflow-hidden gap-y-[27px]
            max-w-auto w-[46%] min-[230px]:w-[40%] lg:max-w-[22.5%] lg:w-auto "
          >
            <Link
              to={`${categoryInfo.link}`}
              className="flex flex-col gap-y-[20px] h-zoom-in"
            >
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
        </LeftToRightAnimation>
      ))}
    </section>
  );
};

export default ProductsByCategory;
