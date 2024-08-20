import BannerImage from "../../../bottomBanners/bannerImage/BannerImage";
import Description from "../../../bottomBanners/description/Description";

const SliderContents = ({ slider }) => {
  const url = import.meta.env.VITE_STORAGE_URL;
  return (
    <div className="relative pb-5 w-full h-full">
      <BannerImage image={slider.background_image} />
      <Description
        header={slider.title}
        buttonText={slider.button_text}
        buttonUrl={slider.button_link}
        buttonStatus={slider.buttonStatus}
        text={slider.subtitle}
        isSlider={true}
      />
    </div>
  );
};

export default SliderContents;
