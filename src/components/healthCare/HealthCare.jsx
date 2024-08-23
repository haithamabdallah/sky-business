import PageCover from "../innerPages/components/pageCover/PageCover";
import FoodCategories from "./components/foodCategories/FoodCategories";
import CoverComponent from "../CoverComponent";
import OurFoodServices from "./components/ourFoodServices/OurFoodServices";

const HealthCare = ({ healthCareData }) => {
  const settings = healthCareData.settings;
  const desktopCover = settings.cover_desktop;
  const mobileCover = settings.cover_mobile;
  const {
    cover_header: headerCover,
    cover_text: textCover,
    is_dark: isDark,
  } = settings;
  const foodCategories = {
    organics: healthCareData.organics,
    header: healthCareData.settings.header,
    text: healthCareData.settings.text,
  };

  const ourServices =
    settings.section_4_status === 0
      ? null
      : {
          header: healthCareData.settings.header2,
          text: healthCareData.settings.text2,
          button: healthCareData.settings.button,
          image: healthCareData.settings.image,
        };

  return (
    <>
      <CoverComponent
        desktopCover={desktopCover}
        mobileCover={mobileCover}
        header={headerCover}
        text={textCover}
        isDark={isDark}
      />
      <div className="flex flex-col max-w-[75rem] mx-auto mt-12 font-futura">
        <FoodCategories foodCategories={foodCategories} />
        {ourServices && <OurFoodServices ourServices={ourServices} />}
      </div>
    </>
  );
};

export default HealthCare;
