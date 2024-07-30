import ContactUs from "./components/contactUs/ContactUs";
import LinkList from "./components/linkList/LinkList";

const MiddleFooter = () => {
  return (
    <section>
      <div className="px-[0.9375rem] mx-auto max-w-[75rem] w-full">
        <div className="lg:flex lg:flex-wrap">
          <LinkList />
          <ContactUs />
        </div>
      </div>
    </section>
  );
};

export default MiddleFooter;
