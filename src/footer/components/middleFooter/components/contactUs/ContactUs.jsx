import FooterContact from "./components/footerContact/FooterContact";
import Newsletter from "./components/newsletter/Newsletter";
import PurchaseOption from "./components/purchaseOption/PurchaseOption";
import Socials from "./components/socials/Socials";

const ContactUs = () => {
  return (
    <div className="lg:mt-9 mt-5 flex flex-col lg:px-[0.9375rem] lg:w-1/3">
      <Newsletter />
      <FooterContact />
      {/* <Socials /> */}
    </div>
  );
};

export default ContactUs;
