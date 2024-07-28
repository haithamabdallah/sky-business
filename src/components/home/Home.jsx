import Banners from "./components/banners/Banners";
import NewsletterSubscription from "./components/newsletterSubscription/NewsletterSubscription";
import ProductsByCategory from "./components/productsByCategory/ProductsByCategory";
import Slider from "./components/slider/Slider";
import ProductList from "../innerPages/components/productList/ProductList";
import { products } from "../innerPages/components/productList/data";
import SkinConsultAIBanner from "./components/skinConsultAIBanner/SkinConsultAIBanner";
import SkinHealthScienceBanner from "./components/skinHealthScienceBanner/SkinHealthScienceBanner";

const Home = () => {
  return (
    <main className="flex flex-col">
      <Slider />
      <Banners />
      <ProductsByCategory />
      <SkinConsultAIBanner />
      <SkinHealthScienceBanner />
      {/* <NewsletterSubscription /> */}
    </main>
  );
};

export default Home;
