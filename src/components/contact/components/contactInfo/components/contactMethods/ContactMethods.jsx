import { useContext } from "react";
import phoneImage from "./phone-icon.svg";
import emailImage from "./email-icon.svg";
import timeImage from "./time-icon.svg";
import { Context } from "../../../../../../ContextProvider";
import { Link } from "react-router-dom";
const ContactMethods = () => {
  const { state } = useContext(Context);
  const {
    notification_email: notificationEmail,
    phone,
    work_hours: workHours,
  } = state.general.settings;
  return (
    <div className="flex flex-col gap-y-4 mt-5">
      <div className="flex gap-x-4 w-full">
        <img
          className="bg-[#0149ab] w-[32px] h-[32px] p-1 mt-1"
          src={phoneImage}
          alt="phone icon"
        />
        <Link to={`tel:${phone}`} className="flex flex-col">
          <p className="text-sm font-bold">Have any Questions ?</p>
          <p className="text-sm text-[rgba(0,0,0,0.4)]">{phone}</p>
        </Link>
      </div>
      <div className="flex gap-x-4 w-full">
        <img
          className="bg-[#0149ab] w-[32px] h-[32px] p-1 mt-1"
          src={emailImage}
          alt="email icon"
        />
        <Link to={`mailto:${notificationEmail}`} className="flex flex-col">
          <p className="text-sm font-bold">Write email</p>
          <p className="text-sm text-[rgba(0,0,0,0.4)]">{notificationEmail}</p>
        </Link>
      </div>
      <div className="flex gap-x-4 w-full items-center">
        <img
          className="bg-[#0149ab] w-[32px] h-[32px] p-1"
          src={timeImage}
          alt="work hours icon"
        />
        <div className="flex flex-col">
          <p className="text-sm font-bold">Visit anytime</p>
          <p className="text-sm text-[rgba(0,0,0,0.4)]">{workHours}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactMethods;
