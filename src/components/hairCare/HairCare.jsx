import CoverComponent from "../CoverComponent";
import PageCover from "../innerPages/components/pageCover/PageCover";
import OurServices from "./components/ourServices/OurServices";
import Products from "./components/products/Products";

const HairCare = ({ hairCareData }) => {
  const settings = hairCareData.settings;

  const productsData = {
    products: hairCareData["hair products"],
    header: settings.header,
    text: settings.text,
  };
  const ourServices =
    settings.section_4_status === 0
      ? null
      : {
          header: settings.header2,
          text: settings.text2,
          button: settings.button,
          image: settings.image,
        };
  return (
    <>
      <CoverComponent
        desktopCover={settings.cover_desktop}
        mobileCover={settings.cover_mobile}
      />
      <div className="flex flex-col max-w-[75rem] mx-auto mt-[154px] font-futura">
        <Products productsData={productsData} />
        {ourServices && <OurServices ourServices={ourServices} />}
      </div>
    </>
  );
};

export default HairCare;
