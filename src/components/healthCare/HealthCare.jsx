import FoodCategories from "./components/foodCategories/FoodCategories";
import CoverComponent from "../CoverComponent";
import OurFoodServices from "./components/ourFoodServices/OurFoodServices";
import { Context } from "../../ContextProvider";
import { useContext } from "react";

const HealthCare = () => {
  const { state } = useContext(Context);

  return (
    <div>
      <CoverComponent
        desktopCover={state.healthCareData.settings.cover_desktop}
        mobileCover={state.healthCareData.settings.cover_mobile}
        header={state.healthCareData.settings.cover_header}
        text={state.healthCareData.settings.cover_text}
        isDark={state.healthCareData.settings.is_dark}
      />
      <div className="flex flex-col max-w-[75rem] mx-auto mt-12 font-futura">
        <FoodCategories />
        <OurFoodServices />
      </div>
    </div>
  );
};

export default HealthCare;
