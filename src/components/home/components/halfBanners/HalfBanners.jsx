import image1024 from "./1024.jpg";
import image768 from "./768.jpg";
import imageRest from "./rest.jpg";
import imageDefault from "./default.jpg";
import { Link } from "react-router-dom";
const HalfBanners = ({ banners, isFull }) => {
  const url = import.meta.env.VITE_STORAGE_URL;
  return (
    <section
      className={`mx-auto mb-[60px] grid grid-rows-2 grid-cols-1 md:grid-cols-2 md:grid-rows-1
      gap-[10px] ${
        Number(isFull) === 1 ? "w-full px-0" : "max-w-[75rem] px-[.9375rem]"
      }`}
    >
      {banners.map((banner, i) => (
        <div className="relative" key={i}>
          <img
            alt="Committed to skin health science"
            src={`${url}/${banner.image}`}
            width="100%"
            height="299"
          />
          <h2
            className={`text-[28px] leading-10 font-semibold absolute left-5 top-5 ${
              banner["is_dark"] ? "text-white" : "text-black"
            }`}
          >
            {banner.header}
          </h2>
        </div>
      ))}
    </section>
  );
};

export default HalfBanners;
