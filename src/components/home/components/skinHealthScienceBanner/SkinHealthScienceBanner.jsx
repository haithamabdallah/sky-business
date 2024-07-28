import image1024 from "./1024.jpg";
import image768 from "./768.jpg";
import imageRest from "./rest.jpg";
import imageDefault from "./default.jpg";
import { Link } from "react-router-dom";
const SkinHealthScienceBanner = () => {
  return (
    <section
      className="mb-[60px] px-[1.125rem] lg:px-[2.375rem] m-auto w-full relative"
    >
      <picture>
        <source
          sizes="1500px"
          media="(min-width:1024px)"
          width="1500"
          height="371"
          data-aspectratio="4.0431266846361185"
          srcSet={image1024}
        />
        <source
          sizes="1500px"
          media="(min-width:768px)"
          width="1500"
          height="371"
          data-aspectratio="4.0431266846361185"
          srcSet={image768}
        />
        <source
          sizes="600px"
          media="(min-width:0)"
          width="600"
          height="299"
          data-aspectratio="2.0066889632107023"
          srcSet={imageRest}
        />
        <img
          alt="Committed to skin health science"
          className="m-auto"
          src={imageDefault}
          width="600"
          height="299"
        />
      </picture>
    </section>
  );
};

export default SkinHealthScienceBanner;
