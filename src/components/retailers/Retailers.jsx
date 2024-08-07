import PageCover from "../innerPages/components/pageCover/PageCover";
import Header from "./components/header/Header";
import Logos from "./components/logos/Logos";
import CoverComponent from "../CoverComponent";

const Retail = ({ retailerData }) => {
  const desktopCover = retailerData.settings.cover_desktop;
  const mobileCover = retailerData.settings.cover_mobile;
  return (
    retailerData.settings && (
      <>
        <CoverComponent desktopCover={desktopCover} mobileCover={mobileCover} />
        <div className="max-w-[75rem] mx-auto">
          <div className="my-[6rem] px-[15px]">
            <Header retailerData={retailerData} />
            <Logos retailerData={retailerData} />
          </div>
        </div>
      </>
    )
  );
};

export default Retail;
