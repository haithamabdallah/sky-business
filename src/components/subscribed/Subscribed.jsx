import { Link } from "react-router-dom";
const Subscribed = () => {
  return (
    <div className="w-screen h-screen m-0 p-0 box-border bg-[#eeeeee] pt-[50px] overflow-hidden">
      <div
        className="max-w-[562px] m-auto p-[40px] bg-[#fff] border border-[#d3d3d3]
        text-center font-[sans-serif] text-base"
      >
        <h1 className="flex items-center justify-center text-[28px] font-bold min-h-[32px]">
          You've Been subscribed
        </h1>

        <div className="mt-[30px] text-center">
          <p className="text-[12px] mb-[30px] opacity-60 m-0 leading-[18px] w-full font-semibold ">
            Thanks for confirmation your email address! if you'd like to change
            your subscription, if you'd like to unsubscribe, use
            the link below.
          </p>
          <Link
            to="/unsubscribe"
            className="text-[12px] font-bold m-0 leading-[22px] mb-5 text-[#1255cc]"
          >
            Go to unsubscribe page
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Subscribed;
