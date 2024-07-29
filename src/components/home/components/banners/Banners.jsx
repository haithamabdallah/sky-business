import { Link } from "react-router-dom";
import { banners } from "./data";

const Banners = () => {
  return (
    <section className="w-full flex flex-col mt-5">
      {banners.map((banner, i) => (
        <Link to={banner.link} key={`banner ${i + 1}`}>
          <picture width="100vw">
            <source
              srcSet={banner.src[0]}
              sizes="100vw"
              media="(min-width:1024px)"
              width="100%"
              height="450"
              data-aspectratio="6.4"
            />
            <source
              srcSet={banner.src[1]}
              sizes="100vw"
              media="(min-width:768px)"
              width="100%"
              height="900"
              data-aspectratio="3.2"
            />
            <source
              srcSet={banner.src[2]}
              sizes="100vw"
              media="(min-width:0)"
              width="100%"
              height="300"
              data-aspectratio="3.2"
            />

            <img
              alt={`banner ${i + 1}`}
              src={banner.src[3]}
              width="100%"
              height="300"
            />
          </picture>
        </Link>
      ))}
    </section>
  );
};

export default Banners;
