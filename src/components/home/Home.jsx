import Banners from "./components/banners/Banners";
import NewsletterSubscription from "./components/newsletterSubscription/NewsletterSubscription";
import ProductsByCategory from "./components/productsByCategory/ProductsByCategory";
import Slider from "./components/slider/Slider";

const Home = () => {
  return (
    <main className="flex flex-col">
      <Slider />
      <Banners />
      <ProductsByCategory />
      {/* <NewsletterSubscription /> */}
    </main>
  );
};

export default Home;
