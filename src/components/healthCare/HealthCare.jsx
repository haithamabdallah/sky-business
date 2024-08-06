import PageCover from "../innerPages/components/pageCover/PageCover";
import FoodCategories from "./components/foodCategories/FoodCategories";
import OurFoodServices from "./components/ourFoodServices/OurFoodServices";

const HealthCare = ({ healthCareData }) => {
  const url = import.meta.env.VITE_STORAGE_URL;
  const cover = healthCareData.settings.cover;
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
      <PageCover title="" subtitle="" backgroundImage={`${url}/${cover}`} />
      <div className="flex flex-col max-w-[75rem] mx-auto mt-[154px] font-futura">
        <FoodCategories foodCategories={foodCategories} />
        {/* <OurFoodServices ourFoodServices={ourFoodServices} /> */}
      </div>
    </>
  );
};

export default HealthCare;
