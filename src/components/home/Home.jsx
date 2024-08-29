import Banners from "./components/banners/Banners";
import ProductsByCategory from "./components/productsByCategory/ProductsByCategory";
import Slider from "./components/slider/Slider";
import Popup from "./components/popup/Popup";
import BottomBanners from "./components/bottomBanners/BottomBanners";
import HalfBanners from "./components/halfBanners/HalfBanners";
import { useContext, useEffect } from "react";
import { Context } from "../../ContextProvider";

const Home = () => {
  const { state, setState } = useContext(Context);
  const isSubscribed = localStorage.getItem("subscribed") ? true : false;
  useEffect(() => {
    if (!isSubscribed && localStorage.getItem("cookies_popup")) {
      setTimeout(() => {
        setState((prev) => ({ ...prev, showPopup: true }));
      }, 3000);
    }
  }, []);

  return (
    state.homeData.sliders && (
      <main className="flex flex-col">
        <Slider />
        <Banners />
        <ProductsByCategory />
        <HalfBanners />
        <BottomBanners />
        {state.showPopup && <Popup />}
      </main>
    )
  );
};
export default Home;
