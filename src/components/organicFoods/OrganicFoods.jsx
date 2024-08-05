import PageCover from "../innerPages/components/pageCover/PageCover";
import FoodCategories from "./components/foodCategories/FoodCategories";
import OurFoodServices from "./components/ourFoodServices/OurFoodServices";

const OrganicFoods = ({ organicFoodsData }) => {
  const url = import.meta.env.VITE_STORAGE_URL;
  const cover = organicFoodsData.settings.cover;
  const foodCategories = {
    organics: organicFoodsData.organics,
    header: organicFoodsData.settings.header,
    text: organicFoodsData.settings.text,
  };

  const ourFoodServices = {
    header: organicFoodsData.settings.header2,
    text: organicFoodsData.settings.text2,
    button: organicFoodsData.settings.button,
    image: organicFoodsData.settings.image,
  };

  return (
    <>
      <PageCover title="" subtitle="" backgroundImage={`${url}/${cover}`} />
      <div className="flex flex-col max-w-[75rem] mx-auto mt-[154px] font-futura">
        <FoodCategories foodCategories={foodCategories} />
        <OurFoodServices ourFoodServices={ourFoodServices} />
      </div>
    </>
  );
};

export default OrganicFoods;
