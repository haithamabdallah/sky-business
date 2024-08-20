import BannerImage from "../../../bottomBanners/bannerImage/BannerImage";
import Description from "../../../bottomBanners/description/Description";

const SliderContents = ({ slider }) => {
  return (
    <div className="relative pb-5 w-full h-full">
      <div className="hidden lg:block">
        <BannerImage image={slider.image_desktop} />
      </div>
      <div className="block lg:hidden">
        <BannerImage image={slider.image_mobile} />
      </div>
      <Description
        header={slider.title}
        buttonText={slider.button_text}
        buttonUrl={slider.button_link}
        buttonStatus={slider.button_status}
        text={slider.subtitle}
        isDark={slider.is_dark}
        isSlider={true}
      />
    </div>
  );
};

export default SliderContents;
