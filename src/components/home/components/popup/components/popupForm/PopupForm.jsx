import { useState, useEffect } from "react";
import sendRequest from "../../../../../../methods/fetchData";
import Input from "../../../../../contact/components/contactForm/components/input/Input";
const PopupForm = ({ setMessage, setStatus }) => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <form
      className="flex flex-col row-span-4 mt-6"
      onSubmit={(e) => {
        e.preventDefault();
        sendRequest({
          method: "get",
          endpoint: "subscribe",
          params: { email },
        }).then((data) => {
          setMessage(data.message);
          setStatus(data.status);
        });
      }}
    >
      <div className={`flex flex-col w-full relative`}>
        <Input
          handleChange={handleChange}
          input={{
            name: "email",
            displayName: "Email",
            type: "email",
            required: true,
          }}
        />
      </div>
      {/* <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email Address"
        className="p-3 my-5 outline-none border border-gray-400"
      /> */}
      <button
        className="w-full bg-black text-white mt-5 p-5 mb-5 text-xl"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default PopupForm;
