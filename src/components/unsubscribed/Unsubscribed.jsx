import { Link } from "react-router-dom";
const Unsubscribed = () => {
  return (
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
          <Link
            to="/"
            className="cursor-pointer bg-[#0364cc] 
            text-[#ffffff] px-[15px] py-[10.5px] rounded-[2px] font-[Arial] block
            text-[13px] max-w-[200px] m-auto mt-5 border-none font-bold"
          >
            Resubscribe
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Unsubscribed;
