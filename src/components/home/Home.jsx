import Banners from "./components/banners/Banners";
import NewsletterSubscription from "./components/newsletterSubscription/NewsletterSubscription";
import ProductsByCategory from "./components/productsByCategory/ProductsByCategory";
import Slider from "./components/slider/Slider";
import ProductList from "../innerPages/components/productList/ProductList";
import { products } from "../innerPages/components/productList/data";
import SkinConsultAIBanner from "./components/skinConsultAIBanner/SkinConsultAIBanner";
import SkinHealthScienceBanner from "./components/skinHealthScienceBanner/SkinHealthScienceBanner";
import Popup from "./components/popup/Popup";
import { useEffect, useState } from "react";

const Home = ({ homeData }) => {
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowPopup(true);
    }, 3000);
  }, []);
  return (
    homeData.sliders && (
      <main className="flex flex-col">
        <Slider sliders={homeData.sliders} />
        <Banners banner={homeData.settings.banner1} />
        <ProductsByCategory
          categories={homeData.categories}
          explore={homeData.settings.explore}
        />
        <SkinConsultAIBanner banner={homeData.settings.banner2} />
        <SkinHealthScienceBanner banner={homeData.settings.banner3} />
        {showPopup && <Popup />}
      </main>
    )
  );
};

export default Home;
