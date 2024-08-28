import { lazy } from "react";
const Banners = lazy(() => import("./components/banners/Banners"));
const ProductsByCategory = lazy(() =>
  import("./components/productsByCategory/ProductsByCategory")
);
const Slider = lazy(() => import("./components/slider/Slider"));
const Popup = lazy(() => import("./components/popup/Popup"));
const BottomBanners = lazy(() =>
  import("./components/bottomBanners/BottomBanners")
);
const HalfBanners = lazy(() => import("./components/halfBanners/HalfBanners"));

const Home = ({ homeData, showPopup, setShowPopup }) => {
  const isSubscribed = localStorage.getItem("subscribed") ? true : false;
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
