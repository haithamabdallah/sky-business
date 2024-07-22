import { Link } from "react-router-dom";
import { banners } from "./data";

const Banners = () => {
  return (
    <section className="w-full flex flex-col mt-5">
      {banners.map((banner, i) => (
        <Link to={banner.link}>
          <img src={banner.src} alt={`banner ${i + 1}`} />
        </Link>
      ))}
    </section>
  );
};

export default Banners;
