import { Link } from "react-router-dom";
import BannerImage from "./bannerImage/BannerImage";
import Description from "./description/Description";
import BottomToTopAnimation from "../../../../animationComponents/bottomToTopAnimation/BottomToTopAnimation";
const BottomBanners = ({ banners }) => {
  return banners.map((banner, index) => (
    <BottomToTopAnimation key={`new banner ${index + 1}`} index={index}>
      <div className="relative">
        <section
          className={`mx-auto
          lg:mb-[70px] mb-2 ${
            banner.is_full == 1
              ? "max-w-none px-0"
              : "max-w-[75rem] px-[.9375rem]"
          }`}
        >
          <BannerImage
            image={banner.image}
            isFull={banner.is_full}
            imageUrl={banner.url}
          />
          <Description
            header={banner.header}
            buttonText={banner.button_text}
            buttonUrl={banner.button_url}
            buttonStatus={banner.button_status}
            text={banner.text}
            isDark={banner.is_dark}
          />
        </section>
      </div>
    </BottomToTopAnimation>
  ));
};

export default BottomBanners;
