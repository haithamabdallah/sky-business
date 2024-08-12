import { Link } from "react-router-dom";
import BannerImage from "./bannerImage/BannerImage";
import Description from "./description/Description";
const SkinConsultAIBanner = ({ banner }) => {
  return (
    <div className="relative">
      <section className="lg:my-[3.75rem] max-w-[75rem] px-[.9375rem] mx-auto mt-[2.1875rem] mb-[4.375rem]">
        <BannerImage image={banner.image} />
        {/* <Description
          header={banner.header}
          buttonText={banner.button_text}
          text={banner.text}
        /> */}
      </section>
    </div>
  );
};

export default SkinConsultAIBanner;
