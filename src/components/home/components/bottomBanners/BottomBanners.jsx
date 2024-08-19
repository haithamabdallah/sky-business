import { Link } from "react-router-dom";
import BannerImage from "./bannerImage/BannerImage";
import Description from "./description/Description";
const BottomBanners = ({ banners }) => {

  return banners.map((banner, index) => (
    <div className="relative" key={`new banner ${index + 1}`}>
      <section
        className={`lg:my-[3.75rem] mx-auto mt-[2.1875rem]
        mb-[4.375rem] ${
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
        />
      </section>
    </div>
  ));
};

export default BottomBanners;
