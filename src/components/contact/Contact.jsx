import ContactForm from "./components/contactForm/ContactForm";
import CoverComponent from "../CoverComponent";
import ContactInfo from "./components/contactInfo/ContactInfo";
import { Context } from "../../ContextProvider";
import { useContext } from "react";
const Contact = () => {
  const { state } = useContext(Context);
  return (
    <div>
      <CoverComponent
        desktopCover={state.contactData.settings.cover_desktop}
        mobileCover={state.contactData.settings.cover_mobile}
        header={state.contactData.settings.cover_header}
        text={state.contactData.settings.cover_text}
        isDark={state.contactData.settings.is_dark}
      />
      <section
        className="flex flex-col items-center justify-center max-w-[75rem] mx-auto px-4
      mt-[70px] font-futura my-[3rem]"
      >
        <div className="flex flex-col gap-y-9 lg:grid lg:grid-cols-3 lg:gap-x-9">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default Contact;
