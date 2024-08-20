import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import sendRequest from "../../methods/fetchData";
const Unsubscribed = () => {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      setMessage("");
      setStatus("");
      if (status === "success") navigate("/");
    }, 2000);

    return () => null;
  }, [message]);
  const location = useLocation();
  const email = location.state ? location.state.email : null;
  if (email === null) {
    navigate("/");
  }
  return (
    email && (
      <div className="w-screen h-screen m-0 p-0 box-border bg-[#eeeeee] pt-[50px] overflow-hidden">
        <div
          className="max-w-[562px] m-auto p-[40px] bg-[#fff] border border-[#d3d3d3]
        text-center font-[sans-serif] text-base"
        >
          <h1 className="flex items-center justify-center text-[28px] font-bold min-h-[32px]">
            You've Been Unsubscribed
          </h1>

          <div className="mt-[30px] text-center">
            <p className="text-[12px] mb-[30px] opacity-60 m-0 leading-[18px] w-full font-semibold ">
              if you'd like to re-subscribe to this list, use the link below.
            </p>
            <button
              to="/"
              className="cursor-pointer bg-[#0364cc] 
            text-[#ffffff] px-[15px] py-[10.5px] rounded-[2px] font-[Arial] block
            text-[13px] max-w-[200px] m-auto mt-5 border-none font-bold"
              onClick={() => {
                sendRequest({
                  method: "get",
                  endpoint: "resubscribe",
                  params: { email },
                }).then((data) => {
                  setMessage(data.message);
                  setStatus(data.status);
                });
              }}
            >
              Resubscribe
            </button>
            {message.length > 0 && status === "success" && (
              <small className="w-full py-5 mt-5 text-green-700 text-[1rem]">
                {message}
              </small>
            )}
            {message.length > 0 && status === "error" && (
              <small className="w-full text-center my-5 text-red-700 text-xs font-bold">
                {message}
              </small>
            )}
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
    )
  );
};
export default Unsubscribed;
