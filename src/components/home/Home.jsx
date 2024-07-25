import Banners from "./components/banners/Banners";
import NewsletterSubscription from "./components/newsletterSubscription/NewsletterSubscription";
import ProductsByCategory from "./components/productsByCategory/ProductsByCategory";
import Slider from "./components/slider/Slider";
import ProductList from '../innerPages/components/productList/ProductList';
import {products} from "../innerPages/components/productList/data";
import SkinConsultAIBanner from "./components/skinConsultAIBanner/SkinConsultAIBanner";

const Home = () => {
  return (
    <main className="flex flex-col">
      <Slider />
      <Banners />
      <ProductsByCategory />
      <SkinConsultAIBanner />
      {/* <NewsletterSubscription /> */}
    </main>
  );
};

export default Home;
