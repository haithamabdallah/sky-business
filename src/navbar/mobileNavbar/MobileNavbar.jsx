import { tabs } from "../../sharedData/tabs";
import { useContext, useState } from "react";
import MenuIcon from "./menuIcon/MenuIcon";
import Items from "./items/Items";
import { Link } from "react-router-dom";
import { Context } from "../../ContextProvider";
import Logout from "../../logout/Logout";
const MobileNavbar = ({ scrollStatus, clearSearch }) => {
  const url = import.meta.env.VITE_STORAGE_URL;
  const [show, setShow] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [term, setTerm] = useState("");

  const { state } = useContext(Context);

  const logo = `${url}/${state.general.settings.logo}`;

  const token = localStorage.getItem("token");

  return (
    <nav
      className={`flex fixed min-[1200px]:hidden w-screen bg-white top-0 ${
        show ? "" : "px-[15px]"
      } ${
        scrollStatus === "down" ? "translate-y-[-54px]" : "translate-y-0"
      } h-[54px] z-50 items-center font-futura transition-transform duration-500 shadow`}
    >
      <Link
        className={`max-w-[6.5625rem] ${show ? "hidden" : "mr-auto"}`}
        onClick={() => {
          setShow(false);
          clearSearch(setTerm, setShowSearch);
          document.querySelector("body").classList.remove("overflow-hidden");
        }}
        to="/"
      >
        <img alt="logo" src={logo} />
      </Link>
      {show === false && (
        <Items
          scrollStatus={scrollStatus}
          show={showSearch}
          setShow={setShowSearch}
          term={term}
          setTerm={setTerm}
        />
      )}
      <MenuIcon
        show={show}
        setShow={setShow}
        setShowSearch={setShowSearch}
        setTerm={setTerm}
      />
      <section
        className={`transition-opacity duration-500 ${
          show
            ? "fixed top-0 right-0 z-30 opacity-100 translate-x-0"
            : "opacity-0 animate-pushToSide [animation-delay:500ms]"
        } w-full h-screen flex flex-col absolute right-0 top-0 bg-black bg-opacity-40`}
      >
        <div className="absolute top-0 left-0 w-full max-h-[54px] h-[54px] flex items-center bg-black z-10 font-futura text-sm leading-5">
          {token && (
            <p className="text-white w-full text-center">You are logged in</p>
          )}
        </div>
        <div className="min-h-[54px] min-w-[100vw]"></div>
        <div className="flex w-full flex-auto h-full">
          <div
            className="w-[80px] min-h-screen"
            onClick={() => {
              setShow(false);
              clearSearch(setTerm, setShowSearch);
              document
                .querySelector("body")
                .classList.remove("overflow-hidden");
            }}
          ></div>
          <div className="w-full overflow-scroll pb-[54px] bg-white h-full">
            <ul className={`flex flex-col px-5 pt-3`}>
              {tabs.map((tab, i) => {
                if (token && ["/login"].includes(tab.route)) return;
                return (
                  <li key={i} className={`text-xs my-3 leading-5`}>
                    <Link
                      to={tab.route}
                      className="py-1 rounded-full"
                      onClick={() => {
                        setShow(false);
                        clearSearch(setTerm, setShowSearch);
                        document
                          .querySelector("body")
                          .classList.remove("overflow-hidden");
                      }}
                    >
                      {tab.name.toUpperCase()}
                    </Link>
                  </li>
                );
              })}
              {token && (
                <Logout
                  setShow={setShow}
                  setTerm={setTerm}
                  setShowSearch={setShowSearch}
                />
              )}
            </ul>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default MobileNavbar;
