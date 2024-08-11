import ContactUs from "./components/contactUs/ContactUs";
import LinkList from "./components/linkList/LinkList";
import MiddleFooterMobile from "./components/middleFooterMobile/MiddleFooterMobile";


const MiddleFooter = () => {
  return (
    <section>
      <div className="px-[0.9375rem] mx-auto max-w-[75rem] w-full hidden md:block">
        <div className="lg:flex lg:flex-wrap">
          <LinkList />
          <ContactUs />
        </div>
      </div>
      <div className="md:hidden">
        <MiddleFooterMobile />
      </div>
    </section>
  );
};

export default MiddleFooter;
