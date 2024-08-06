import { useState } from "react";
import image from "./1.jpg";
import PopupForm from "./components/popupForm/PopupForm";
import logo from "./logo.jpeg";
const Popup = () => {
    const [show, setShow] = useState(true)
  return (
   show && <div
      className="w-full h-screen fixed top-0 left-0 bg-black bg-opacity-65 flex
      justify-center items-center font-futura z-50"
    >
      <div className="min-w-[60%] bg-white min-h-[10%] max-h-[90%] max-w-[90%] grid grid-cols-2">
        <div className="min-h-[10%] max-h-[90%] flex items-center">
          <img className="h-full" src={image} alt="offer image" />
        </div>
        <div className="flex flex-col px-4 relative min-h-[10%] max-h-[90%]">
          <button
            className="absolute right-1 top-2"
            onClick={() => {
              setShow(false);
            }}
          >
            <svg  className="scale-[0.8]" width="26" height="26" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M21 1L1 21m20 0L1 1"
                stroke="#000"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
          </button>
          <img
            className="sm:max-w-[10rem] sm:w-auto max-w-none w-[90px] sm:self-center self-start"
            src={logo}
            alt="offer image"
          />
          <h2 className="sm:text-3xl text-base text-red-600 font-semibold">
            Sign up and be the first to know about our biggest offers of the
            year!
          </h2>
          <PopupForm />
        </div>
      </div>
    </div>
  );
};

export default Popup;
