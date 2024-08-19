import BannerImage from "./home/components/bottomBanners/bannerImage/BannerImage";
import Description from "./home/components/bottomBanners/description/Description";

const CoverComponent = ({ desktopCover, mobileCover, header, text }) => {
  const url = import.meta.env.VITE_STORAGE_URL;
  return (
    <>
      <div className="w-screen relative md:block hidden">
        <BannerImage image={desktopCover} />
        <Description header={header} text={text} isCover={true} />
      </div>
      <div className="w-screen relative md:hidden block">
        <BannerImage image={mobileCover} />
        <Description header={header} text={text} isCover={true} />
      </div>
    </>
    //   <img
    //     className=""
    //     alt="desktop cover"
    //     src={`${url}/${desktopCover}`}
    //   />
    //   <img
    //     className=" w-full"
    //     alt="mobile cover"
    //     src={`${url}/${mobileCover}`}
    //   />
    // </div>
  );
};

export default CoverComponent;
