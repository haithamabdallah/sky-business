import Banners from "./components/banners/Banners";
import ProductsByCategory from "./components/productsByCategory/ProductsByCategory";
import Slider from "./components/slider/Slider";
import Popup from "./components/popup/Popup";
import BottomBanners from "./components/bottomBanners/BottomBanners";
import HalfBanners from "./components/halfBanners/HalfBanners";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Home = ({ homeData, showPopup, setShowPopup }) => {
  const isSubscribed = localStorage.getItem("subscribed") ? true : false;
  useEffect(() => {
    const handleLoad = () => {
      console.log("Page fully loaded, including images and resources");
      ScrollTrigger.refresh();
    };
  
    if (document.readyState === "complete") {
      // If the page is already loaded
      handleLoad();
    } else {
      // Otherwise, wait for the load event
      window.addEventListener("load", handleLoad);
    }
  
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);
  return (
    homeData.sliders && (
      <main className="flex flex-col overflow-hidden">
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
        {showPopup && !isSubscribed && <Popup setShowPopup={setShowPopup} />}
      </main>
    )
  );
};

export default Home;
