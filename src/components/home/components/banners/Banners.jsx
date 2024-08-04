import { Link } from "react-router-dom";
import { banners } from "./data";

const Banners = ({ banner }) => {
  const url = import.meta.env.VITE_STORAGE_URL;
  return (
    <section className="w-full flex flex-col mt-5">
      <img
        alt='banner 1'
        src={`${url}/${banner}`}
        width="100%"
        height="300"
      />
    </section>
  );
};

export default Banners;
