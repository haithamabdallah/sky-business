import { Link } from "react-router-dom";
import { banners } from "./data";
import { useContext } from "react";
import { Context } from "../../../../ContextProvider";

const Banners = () => {
  const url = import.meta.env.VITE_STORAGE_URL;
  const { state } = useContext(Context);
  return (
    <section className="w-full flex flex-col mt-5">
      <img
        alt="banner 1"
        src={`${url}/${state.homeData.settings.banner1}`}
        width="100%"
        height="300"
      />
    </section>
  );
};

export default Banners;
