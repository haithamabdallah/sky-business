import ContactForm from "./components/contactForm/ContactForm";
import { paragraphs } from "./data";
import PageCover from "../innerPages/components/pageCover/PageCover";
import CoverComponent from "../CoverComponent";
import ContactInfo from "./components/contactInfo/ContactInfo";
const Contact = ({ contactData }) => {
  const url = import.meta.env.VITE_STORAGE_URL;
  const settings = contactData.settings;
  const header = settings.header;
  const text = settings.text;
  const desktopCover = settings.cover_desktop;
  const mobileCover = settings.cover_mobile;
  const {
    cover_header: headerCover,
    cover_text: textCover,
    is_dark: isDark,
  } = settings;
  return (
    <>
      <CoverComponent
        desktopCover={desktopCover}
        mobileCover={mobileCover}
        header={headerCover}
        text={textCover}
        isDark={isDark}
      />
      <section
        className="flex flex-col items-center justify-center max-w-[75rem] mx-auto px-4
      mt-[70px] font-futura my-[3rem]"
      >
        <div className="flex flex-col gap-y-9 lg:grid lg:grid-cols-3 lg:gap-x-9">
          <ContactInfo text={text} header={header} />
          <ContactForm />
        </div>
      </section>
    </>
  );
};

export default Contact;
