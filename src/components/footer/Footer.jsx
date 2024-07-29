import MiddleFooter from "./components/middleFooter/MiddleFooter";
import TopFooter from "./components/topFooter/TopFooter";

const Footer = () => {
  return (
    <footer
      className="w-full max-w-screen overflow-x-hidden bg-[#fff] relative z-10 
      [direction:ltr]"
    >
      <TopFooter />
      <MiddleFooter />
    </footer>
  );
};

export default Footer;
