import PageCover from "../innerPages/components/pageCover/PageCover";
import FoodCategories from "./components/foodCategories/FoodCategories";
import CoverComponent from "../CoverComponent";
import OurFoodServices from "./components/ourFoodServices/OurFoodServices";

const HealthCare = ({ healthCareData }) => {
  const desktopCover = healthCareData.settings.cover_desktop;
  const mobileCover = healthCareData.settings.cover_mobile;
  const foodCategories = {
    organics: healthCareData.organics,
    header: healthCareData.settings.header,
    text: healthCareData.settings.text,
  };

  const ourFoodServices = {
    header: healthCareData.settings.header2,
    text: healthCareData.settings.text2,
    button: healthCareData.settings.button,
    image: healthCareData.settings.image,
  };

  return (
    <>
      <CoverComponent desktopCover={desktopCover} mobileCover={mobileCover} />
      <div className="flex flex-col max-w-[75rem] mx-auto mt-[154px] font-futura">
        <FoodCategories foodCategories={foodCategories} />
        <OurFoodServices ourFoodServices={ourFoodServices} />
      </div>
    </>
  );
};

export default HealthCare;
