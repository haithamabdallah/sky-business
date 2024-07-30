import FooterContact from "./components/footerContact/FooterContact";
import Newsletter from "./components/newsletter/Newsletter";

const ContactUs = () => {
  return (
    <div className="flex flex-col lg:px-[0.9375rem] lg:w-1/3">
      <Newsletter />
      <FooterContact />
    </div>
  );
};

export default ContactUs;
