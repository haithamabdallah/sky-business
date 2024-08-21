import ContactForm from "./components/contactForm/ContactForm";
import { paragraphs } from "./data";
import PageCover from "../innerPages/components/pageCover/PageCover";
import CoverComponent from "../CoverComponent";
import parse from "html-react-parser";

const Contact = ({ contactData }) => {
  const url = import.meta.env.VITE_STORAGE_URL;
  const settings = contactData.settings;
  const header = settings.header;
  const text = settings.text;
  const desktopCover = settings.cover_desktop;
  const mobileCover = settings.cover_mobile;
  const { cover_header: headerCover, cover_text: textCover } = settings;
  return (
    <>
      <CoverComponent
        desktopCover={desktopCover}
        mobileCover={mobileCover}
        header={headerCover}
        text={textCover}
      />
      <section
        className="flex flex-col items-center justify-center max-w-[75rem] mx-auto px-4
      mt-[70px] font-futura my-[3rem]"
      >
        <p className="text-3xl leading-7 mb-12">{header}</p>
        <div className="grid grid-cols-3 gap-x-9">
          <div className="col-span-1">{parse(text)}</div>
          <ContactForm />
        </div>
      </section>
    </>
  );
};

export default Contact;
