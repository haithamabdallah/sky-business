import parse from "html-react-parser";
import ContactMethods from "./components/contactMethods/ContactMethods";
import { Context } from "../../../../ContextProvider";
import { useContext } from "react";

const ContactInfo = () => {
  const { state } = useContext(Context);
  return (
    <div>
      <p className="text-3xl leading-7 mb-5">
        {state.contactData.settings.header}
      </p>
      <div
        className="[&_*]:mx-[0px_!important] [&_*]:px-[0px_!important]
            [&_*]:text-[rgba(0,0,0,0.5)_!important] [&_*]:[font-size:16px_!important] border-b
            border-[rgba(0,0,0,0.2)] "
      >
        {parse(state.contactData.settings.text)}
      </div>
      <ContactMethods />
    </div>
  );
};

export default ContactInfo;
