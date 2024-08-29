import BannerImage from "./home/components/bottomBanners/bannerImage/BannerImage";
import Description from "./home/components/bottomBanners/description/Description";

const CoverComponent = ({
  desktopCover,
  mobileCover,
  header,
  text,
  isDark,
}) => {
  return (
    <>
      <div className="w-screen relative md:block hidden">
        <BannerImage image={desktopCover} />
        <Description
          header={header}
          text={text}
          isCover={true}
          isDark={isDark}
        />
      </div>
      <div className="w-screen relative md:hidden block">
        <BannerImage image={mobileCover} />
        <Description
          header={header}
          text={text}
          isCover={true}
          isDark={isDark}
        />
      </div>
    </>
  );
};

export default CoverComponent;
