import PageCover from "../innerPages/components/pageCover/PageCover";
import Header from "./components/header/Header";
import Logos from "./components/logos/Logos";
import CoverComponent from "../CoverComponent";

const Retail = ({ retailerData }) => {
  const settings = retailerData.settings;
  const desktopCover = settings.cover_desktop;
  const mobileCover = settings.cover_mobile;
  const {
    cover_header: headerCover,
    cover_text: textCover,
    is_dark: isDark,
  } = settings;
  return (
    retailerData.settings && (
      <>
        <CoverComponent
          desktopCover={desktopCover}
          mobileCover={mobileCover}
          header={headerCover}
          text={textCover}
          isDark={isDark}
        />
        <div className="max-w-[75rem] mx-auto">
          <div className="px-[15px]">
            <Header retailerData={retailerData} />
            <Logos retailerData={retailerData} />
          </div>
        </div>
      </>
    )
  );
};

export default Retail;
