import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../../../../../ContextProvider";
import sendRequest from "../../../../../../methods/fetchData";
const PopupForm = ({ setMessage }) => {
  const [email, setEmail] = useState("");
  
  return (
    <form
      className="flex flex-col row-span-4"
      onSubmit={(e) => {
        e.preventDefault();
        sendRequest({
          method: "get",
          endpoint: "subscribe",
          params: { email },
        }).then((data) => {
          if (data.status === "success") setMessage(data.message);
        });
      }}
    >
      {/* <h2 className="leading-6 font-semibold min-[500px]:text-base text-xs">
        Be the first to hear about our latest news, access exclusive VIP offers,
        and much more!
      </h2> */}
      {/* <small className="sm:inline-block hidden font-light text-xs mt-2">
        I expressly consent to receiving exclusive news, promotions and
        opportunities for engagement from SKY Business laboratoires via
        electronic messages (e.g.. e-mails ). I understand that I may withdraw
        my consent at any time from receiving an or all such electronic
        messages.{" "}
        <Link to="/contact" className="underline">
          Contact us
        </Link>{" "}
        or refer to our{" "}
        <Link to="#" className="underline">
          privacy policy
        </Link>{" "}
        for more information. SKY Business laboratoires, 1500 Boulevard
        Robert-Bourassa, Bureau 600, Montreal, Quebec, H3A 3S7: {phone} -
        {notificationEmail}
      </small> */}
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email Address"
        className="p-3 my-5 outline-none border border-gray-400"
      />
      <button
        className="w-full bg-black text-white p-5 mb-5 text-xl"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default PopupForm;
