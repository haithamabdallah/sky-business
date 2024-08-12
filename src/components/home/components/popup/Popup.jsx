import { useState, useEffect, useContext } from "react";
import PopupForm from "./components/popupForm/PopupForm";
import { Context } from "../../../../ContextProvider";
import parse from "html-react-parser";
const Popup = ({ setShowPopup }) => {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const { value } = useContext(Context);

  const url = import.meta.env.VITE_STORAGE_URL;
  const popupText = value.settings.popup_text;
  const popupImage = value.settings.popup_image;
  const logo = `${url}/${value.settings.logo}`;

  useEffect(() => {
    if (message.length) {
      localStorage.setItem("subscribed", "true");
      setTimeout(() => {
        setShowPopup(false);
      }, 1500);
    }
  }, [message]);

  return (
    <div
      className="w-full h-screen fixed top-0 left-0 bg-black bg-opacity-65 flex
      justify-center items-center font-futura z-50"
    >
      <div
        className="bg-white min-h-[10vh] max-h-[95vh] lg:w-[50rem] md:w-[40rem] sm:w-[35rem] w-[90vw] sm:grid sm:grid-cols-2
        relative flex flex-col sm:static"
      >
        {message.length === 0 ? (
          <>
            <div>
              <img
                className="max-h-[10vh] min-[320px]:max-h-[20vh] min-[454px]:max-h-[30vh] sm:max-h-none h-full w-full px-4
                sm:px-0 mt-12 mb-3 sm:my-0 sm:w-full mx-auto"
                src={`${url}/${popupImage}`}
                alt="offer image"
              />
            </div>
            <div className="flex flex-col lg:gap-y-3 gap-y-1 justify-between px-4 static sm:relative">
              <button
                className="absolute right-3 top-2"
                onClick={() => {
                  setShowPopup(false);
                }}
              >
                <svg
                  className="scale-[0.8]"
                  width="26"
                  height="26"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 1L1 21m20 0L1 1"
                    stroke="#000"
                    strokeWidth="1.5"
                    fill="none"
                  />
                </svg>
              </button>
              <img
                className="sm:max-w-[10rem] sm:w-auto max-w-none w-[90px] sm:self-center self-start
                absolute sm:static top-1 left-0 ml-4 sm:ml-0"
                src={logo}
                alt="logo image"
              />
              <div
                className=" w-full max-h-none sm:max-h-[216px] overflow-y-scroll
              sm:overflow-y-visible"
              >
                {parse(popupText)}
              </div>
              <PopupForm
                setStatus={setStatus}
                setMessage={setMessage}
                logo={logo}
              />
            </div>
          </>
        ) : (
          <>
            {status === "success" && (
              <div
                className="lg:w-[40rem] h-[40vh] md:w-[40rem] sm:w-[35rem] w-[95vw] flex items-center
          justify-center text-green-700 px-4"
              >
                <p className="text-2xl">{message}</p>
              </div>
            )}
            {status === "error" && (
              <div
                className="lg:w-[40rem] h-[40vh] md:w-[40rem] sm:w-[35rem] w-[95vw] flex items-center
          justify-center text-red-700 px-4"
              >
                <p className="text-2xl">{message}</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Popup;
