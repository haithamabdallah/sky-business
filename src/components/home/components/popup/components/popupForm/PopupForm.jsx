import { useState, useEffect } from "react";
import sendRequest from "../../../../../../methods/fetchData";
import Input from "../../../../../contact/components/contactForm/components/input/Input";
import Loading from "../../../../../Loading";
const PopupForm = ({ setMessage, setStatus }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <form
      className="flex flex-col row-span-4 mt-6"
      onSubmit={(e) => {
        e.preventDefault();
        setLoading(true);
        sendRequest({
          method: "get",
          endpoint: "subscribe",
          params: { email },
        }).then((data) => {
          setLoading(false);
          setMessage(data.message);
          setStatus(data.status);
          if (data.status === "success") {
            setEmail("");
            e.target.reset();
          }
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
      <Loading loading={loading} />
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
