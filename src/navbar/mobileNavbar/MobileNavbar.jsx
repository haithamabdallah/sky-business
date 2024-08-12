import { tabs } from "../../sharedData/tabs";
import { useContext, useState } from "react";
import MenuIcon from "./menuIcon/MenuIcon";
import Items from "./items/Items";
import { NavLink, Link } from "react-router-dom";
import { Context } from "../../ContextProvider";
import Logout from "../../logout/Logout";
const MobileNavbar = ({ scrollStatus }) => {
  const url = import.meta.env.VITE_STORAGE_URL;
  const [show, setShow] = useState(false);

  const { value } = useContext(Context);

  const logo = `${url}/${value.settings.logo}`;

  const token = localStorage.getItem("token");

  return (
    <nav
      className={`flex min-[1200px]:hidden w-screen bg-white top-0 ${
        show ? "" : "px-[15px]"
      } ${
        scrollStatus === "down" ? "h-0 static" : "h-[54px] fixed"
      } h-[54px] z-50 items-center font-futura`}
    >
      <Link
        className={`max-w-[6.5625rem] ${show ? "hidden" : "mr-auto"}`}
        onClick={() => {
          setShow(false);
          document.querySelector("body").classList.remove("overflow-hidden");
        }}
        to="/"
      >
        <img alt="logo" src={logo} />
      </Link>
      {show === false && <Items scrollStatus={scrollStatus} />}
      <MenuIcon show={show} setShow={setShow} />
      <section
        className={`${
          show ? "flex fixed top-0 right-0 z-30" : "hidden"
        } w-full h-screen flex-col absolute right-0 top-0 bg-black bg-opacity-40`}
      >
        <div className="absolute top-0 left-0 w-full max-h-[54px] h-[54px] flex items-center bg-black z-10 font-futura text-sm leading-5">
          {token ? (
            <p className="text-white w-full text-center">
              You are logged in
            </p>
          ) : (
            <Link
              to="/register"
              onClick={() => {
                setShow(false);
                document
                  .querySelector("body")
                  .classList.remove("overflow-hidden");
              }}
              className="text-white underline w-full text-center"
            >
              Sign in or sign up
            </Link>
          )}
        </div>
        <div className="flex w-full h-full mt-[54px]">
          <div
            className="w-[80px] min-h-screen"
            onClick={() => {
              setShow(false);
              document
                .querySelector("body")
                .classList.remove("overflow-hidden");
            }}
          ></div>
          <ul
            className={`flex flex-col w-full overflow-auto h-full self-end bg-white px-5 gap-y-5`}
          >
            {tabs.map((tab, i) => {
              if (token && ["/register", "/login"].includes(tab.route)) return;
              return (
                <li key={i} className={`text-xs py-3 leading-5`}>
                  <NavLink
                    to={tab.route}
                    className="py-1 rounded-full"
                    onClick={() => {
                      setShow(false);
                      document
                        .querySelector("body")
                        .classList.remove("overflow-hidden");
                    }}
                  >
                    {tab.name.toUpperCase()}
                  </NavLink>
                </li>
              );
            })}
            {token && <Logout setShow={setShow} />}
          </ul>
        </div>
      </section>
    </nav>
  );
};

export default MobileNavbar;
