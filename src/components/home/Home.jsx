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
<<<<<<< HEAD
    state.homeData.sliders && (
      <main className="flex flex-col">
=======
    homeData.sliders && (
      <main className="flex flex-col overflow-hidden">
>>>>>>> main
        <Slider sliders={homeData.sliders} />
        <Banners banner={homeData.settings.banner1} />
        <ProductsByCategory
          categories={homeData.categories}
          explore={homeData.settings.explore}
        />
        <HalfBanners
          banners={homeData.settings.half_banners}
          isFull={homeData.settings.half_banners_container_is_full}
        />
        <BottomBanners banners={homeData.settings.banners} />
        {state.showPopup && (
          <Popup setShowPopup={setShowPopup} />
        )}
      </main>
    )
  );
};
export default Home;
