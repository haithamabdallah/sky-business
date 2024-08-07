import { useState, useEffect, useContext } from "react";
import PopupForm from "./components/popupForm/PopupForm";
import { Context } from "../../../../ContextProvider";
import parse from "html-react-parser";
const Popup = ({ setShowPopup }) => {
  const [message, setMessage] = useState("");
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
        className="bg-white lg:w-[40rem] md:w-[40rem] sm:w-[35rem] w-[90vw] grid grid-cols-2
        relative"
      >
        {message.length === 0 ? (
          <>
            <div>
              <img
                className="h-full"
                src={`${url}/${popupImage}`}
                alt="offer image"
              />
            </div>
            <div className="flex flex-col lg:gap-y-3 gap-y-1 justify-between px-4 relative min-h-[10%] max-h-[90%]">
              <button
                className="absolute right-1 top-2"
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
                className="sm:max-w-[10rem] sm:w-auto max-w-none w-[90px] sm:self-center self-start"
                src={logo}
                alt="offer image"
              />
              <div className="h-[302px] w-full overflow-y-scroll">
                {parse(popupText)}
              </div>
              <PopupForm setMessage={setMessage} logo={logo} />
            </div>
          </>
        ) : (
          <div
            className="lg:w-[40rem] h-[40vh] md:w-[40rem] sm:w-[35rem] w-[90vw] flex items-center
          justify-center text-green-700"
          >
            <p className="text-2xl">{message}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Popup;
