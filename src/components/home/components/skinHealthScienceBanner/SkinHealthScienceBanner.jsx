import image1024 from "./1024.jpg";
import image768 from "./768.jpg";
import imageRest from "./rest.jpg";
import imageDefault from "./default.jpg";
import { Link } from "react-router-dom";
const SkinHealthScienceBanner = ({ banner }) => {
  const url = import.meta.env.VITE_STORAGE_URL;
  return (
    <section className="max-w-[75rem] px-[.9375rem] mx-auto mb-[60px]">
      <img
        alt="Committed to skin health science"
        className="m-au"
        src={`${url}/${banner}`}
        width="100%"
        height="299"
      />
    </section>
  );
};

export default SkinHealthScienceBanner;
