import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import sendRequest from "../../methods/fetchData";
import ShowMessage from "../ShowMessage";
const Unsubscribe = () => {
  const [form, setForm] = useState({});
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();
  // useEffect(() => {
  //   setTimeout(() => {
  //     setMessage("");
  //     setStatus("");
  //   }, 2000);
  // }, [message]);
  return (
    <div className="w-screen h-screen m-0 p-0 box-border bg-[#eeeeee] pt-[50px] overflow-hidden">
      <div
        className="max-w-[562px] m-auto py-[40px] px-[20px] bg-[#fff] border border-[#d3d3d3]
        text-center font-[sans-serif] text-base"
      >
        <div className="text-center">
          <h1 className="flex items-center justify-center text-[28px] font-bold min-h-[32px]">
            Unsubscribe
          </h1>
        </div>
        <div className="text-left max-w-[340px] m-auto mt-[30px]">
          <form
            className="w-full"
            onChange={(e) => {
              const key = e.target.name;
              const value = e.target.value;
              setForm({ ...form, [key]: value });
            }}
            onSubmit={(e) => {
              e.preventDefault();
              sendRequest({
                method: "get",
                endpoint: "unsubscribe",
                params: { ...form },
              }).then((data) => {
                e.target.reset();
                setMessage(data.message);
                setStatus(data.status);
                if (data.status === "success") {
                  setForm({});
                  e.target.reset();
                  navigate("/unsubscribed", { state: { email: form.email } });
                }
              });
            }}
          >
            <label className="block mb-[5px] font-bold" htmlFor="email">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              className="border border-[#cbcbcb] py-[10px] px-[15px] text-xs outline-none
              block w-full placeholder-black placeholder-opacity-60"
              type="email"
              name="email"
              required
              placeholder="Your Email"
            />
            <div className="mt-[30px]">
              {message.length > 0 && status === "error" && (
                // <small className="w-full text-center my-5 text-red-700 text-xs font-bold">
                //   {message}
                // </small>
                <ShowMessage
                  message={message}
                  classes={
                    "w-full text-center my-5 text-red-700 text-xs font-bold"
                  }
                />
              )}
            </div>
            <button
              type="submit"
              className="cursor-pointer bg-[#0364cc] text-center text-[#ffffff]
              px-[15px] py-[10.5px] rounded-[2px] font-[Arial]
              block text-[13px] max-w-[200px] m-auto mt-5 border-none font-bold"
            >
              Unsubscribe
            </button>
          </form>
        </div>
        <div className="mt-[30px] text-center">
          <Link
            to="/"
            className="text-[12px] font-bold m-0 leading-[22px] mb-5 text-[#34ac60]"
          >
            Go to Website
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Unsubscribe;
