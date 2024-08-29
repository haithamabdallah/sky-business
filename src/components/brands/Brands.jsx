import PageCover from "../innerPages/components/pageCover/PageCover";
import CoverComponent from "../CoverComponent";
import BrandCategories from "./components/brandCategories/BrandCategories";

const Brands = ({ brandData }) => {
  const settings = brandData.settings;
  const desktopCover = settings.cover_desktop;
  const mobileCover = settings.cover_mobile;
  const { cover_header: header, cover_text: text, is_dark: isDark } = settings;
  return (
    brandData.settings && (
      <>
        <CoverComponent
          desktopCover={desktopCover}
          mobileCover={mobileCover}
          header={header}
          text={text}
          isDark={isDark}
        />
        <section className="max-w-[75rem] mx-auto mt-16 px-5">
          <BrandCategories categories={brandData.categories} />
        </section>
      </>
    )
  );
};

export default Brands;
