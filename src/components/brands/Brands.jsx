import PageCover from "../innerPages/components/pageCover/PageCover";
import CoverComponent from "../CoverComponent";
import BrandCategories from "./components/brandCategories/BrandCategories";

const Brands = ({ brandData }) => {
  const desktopCover = brandData.settings.cover_desktop;
  const mobileCover = brandData.settings.cover_mobile;
  return (
    brandData.settings && (
      <>
        <CoverComponent desktopCover={desktopCover} mobileCover={mobileCover} />
        <section className="max-w-[75rem] mx-auto mt-16 px-5">
          <BrandCategories categories={brandData.categories} />
        </section>
      </>
    )
  );
};

export default Brands;
