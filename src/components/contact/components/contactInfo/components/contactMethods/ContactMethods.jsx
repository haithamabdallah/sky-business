import { useContext } from "react";
import phoneImage from "./phone-icon.svg";
import emailImage from "./email-icon.svg";
import timeImage from "./time-icon.svg";
import { Context } from "../../../../../../ContextProvider";
const ContactMethods = () => {
  const { value } = useContext(Context);
  const {
    notification_email: notificationEmail,
    phone,
    work_hours: workHours,
  } = value.settings;
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex gap-x-4 w-full">
        <img
          className="bg-[#0149ab] w-[32px] h-[32px] p-1 mt-1"
          src={phoneImage}
          alt="phone icon"
        />
        <div className="flex flex-col">
          <p className="text-sm font-bold">Have any Questions ?</p>
          <p className="text-sm text-[rgba(0,0,0,0.4)]">{phone}</p>
        </div>
      </div>
      <div className="flex gap-x-4 w-full">
        <img
          className="bg-[#0149ab] w-[32px] h-[32px] p-1 mt-1"
          src={emailImage}
          alt="phone icon"
        />
        <div className="flex flex-col">
          <p className="text-sm font-bold">Write email</p>
          <p className="text-sm text-[rgba(0,0,0,0.4)]">{notificationEmail}</p>
        </div>
      </div>
      <div className="flex gap-x-4 w-full items-center">
        <img
          className="bg-[#0149ab] w-[32px] h-[32px] p-1"
          src={timeImage}
          alt="phone icon"
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
