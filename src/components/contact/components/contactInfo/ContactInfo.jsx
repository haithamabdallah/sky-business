import parse from "html-react-parser";
import ContactMethods from "./components/contactMethods/ContactMethods";

const ContactInfo = ({ header, text }) => {
  return (
    <div>
      <p className="text-3xl leading-7 mb-5">{header}</p>
      <div
        className="[&_*]:mx-[0px_!important] [&_*]:px-[0px_!important]
            [&_*]:text-[rgba(0,0,0,0.5)_!important] [&_*]:[font-size:16px_!important] border-b
            border-[rgba(0,0,0,0.2)] "
      >
        {parse(text)}
      </div>
      <ContactMethods />
    </div>
  );
};

export default ContactInfo;
