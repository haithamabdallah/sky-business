import Banners from "./components/banners/Banners";
import NewsletterSubscription from "./components/newsletterSubscription/NewsletterSubscription";
import Slider from "./components/slider/Slider";

const Home = () => {
  return (
    <main className="flex flex-col">
      <Slider />
      <Banners />
      {/* <NewsletterSubscription /> */}
    </main>
  );
};

export default Home;
