import Banners from "./components/banners/Banners";
import ProductsByCategory from "./components/productsByCategory/ProductsByCategory";
import Slider from "./components/slider/Slider";
import Popup from "./components/popup/Popup";
import BottomBanners from "./components/bottomBanners/BottomBanners";

const Home = ({ homeData, showPopup, setShowPopup }) => {
  const isSubscribed = localStorage.getItem("subscribed") ? true : false;
  return (
    homeData.sliders && (
      <main className="flex flex-col">
        <Slider sliders={homeData.sliders} />
        <Banners banner={homeData.settings.banner1} />
        <ProductsByCategory
          categories={homeData.categories}
          explore={homeData.settings.explore}
        />
        <BottomBanners banners={homeData.settings.banners} />
        {showPopup && !isSubscribed && <Popup setShowPopup={setShowPopup} />}
      </main>
    )
  );
};

export default Home;
