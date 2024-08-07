import ContactForm from "./components/contactForm/ContactForm";
import { paragraphs } from "./data";
import PageCover from "../innerPages/components/pageCover/PageCover";
import CoverComponent from "../CoverComponent";
import parse from "html-react-parser";

const Contact = ({ contactData }) => {
  const url = import.meta.env.VITE_STORAGE_URL;
  const header = contactData.settings.header;
  const text = contactData.settings.text;
  const cover = contactData.settings.cover;
  const desktopCover = contactData.settings.cover_desktop;
  const mobileCover = contactData.settings.cover_mobile;
  return (
    <>
      <CoverComponent desktopCover={desktopCover} mobileCover={mobileCover} />

      <section className="flex flex-col items-center justify-center max-w-[75rem] mx-auto px-4 mt-[70px] font-futura my-[3rem]">
        <p className="text-3xl leading-7 mb-12">{header}</p>
        {parse(text)}
        <ContactForm />
      </section>
    </>
  );
};

export default Contact;
