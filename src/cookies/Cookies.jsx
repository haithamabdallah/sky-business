import { Link } from "react-router-dom";
const Cookies = ({ setShowCookies }) => {
  return (
    <div
      className="w-full h-screen fixed top-0 left-0 bg-black bg-opacity-65 flex
      justify-center items-center font-futura z-50"
    >
      <div
        className="bg-white min-h-[10vh] max-h-[95vh] lg:w-[50rem] md:w-[40rem] sm:w-[35rem]
        w-[90vw] flex flex-col p-4 gap-y-3"
      >
        <button
          onClick={() => {
            setShowCookies(false);
            localStorage.setItem("cookies_popup", "true");
          }}
          className="underline text-sm text-right"
          type="button"
        >
          Reject all non-essential cookies
        </button>
        <h2 className="text-xl font-semibold text-gray-700">
          Your Cookies Settings
        </h2>
        <p className="text-sm text-gray-500">
          We and our partners use cookies on our website to enhance your user
          experience, analyze its website traffic, provide you with targeted
          advertising on third-party sites, and provide you with features
          available on social networks. You can manage your preferences,
          activate non-essential cookies, and learn more about our use of
          cookies at any time in the cookies settings. To find out more about
          cookies, visit our{" "}
          <Link
            onClick={() => {
              setShowCookies(false);
              localStorage.setItem("cookies_popup", "true");
            }}
            className="text-blue-600 underline"
            to="/privacy"
          >
            Privacy Policy
          </Link>
        </p>
        <div className="flex justify-center gap-x-4">
          <button
            onClick={() => {
              setShowCookies(false);
              localStorage.setItem("cookies_popup", "true");
            }}
            className="mb-[0.3125rem] text-[#000] bg-white flex items-center justify-center
            rounded-[1.5625rem] font-semibold text-sm leading-5 h-[3.125rem] px-[0.625rem]
            hover:opacity-65 underline"
          >
            Reject Cookies
          </button>
          <button
            onClick={() => {
              setShowCookies(false);
              localStorage.setItem("cookies_popup", "true");
            }}
            className="text-center appearance-none bg-[#000]
                  border border-transparent rounded-[1.5625rem] text-[#fff] cursor-pointer
                  inline-block font-semibold text-[.875rem] leading-[1] min-w-[10.625rem]
                  py-[1.0625rem] align-middle hover:opacity-65"
          >
            Accept all cookies
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cookies;
