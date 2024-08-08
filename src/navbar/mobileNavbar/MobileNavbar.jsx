import { tabs } from "../../sharedData/tabs";
import { useContext, useState } from "react";
import MenuIcon from "./menuIcon/MenuIcon";
import Items from "./items/Items";
import { NavLink, Link } from "react-router-dom";
import { Context } from "../../ContextProvider";
const MobileNavbar = ({ scrollStatus }) => {
  const url = import.meta.env.VITE_STORAGE_URL;
  const [show, setShow] = useState(false);

  const { value } = useContext(Context);

  const logo = `${url}/${value.settings.logo}`;
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
      {show === false && <Items />}
      <MenuIcon show={show} setShow={setShow} />
      <section
        className={`${
          show ? "flex fixed top-0 right-0 z-30" : "hidden"
        } w-full h-screen flex-col absolute right-0 top-0 bg-black bg-opacity-40`}
      >
        <div className="w-full h-[54px] flex items-center bg-black z-10 font-futura text-sm leading-5">
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
        </div>
        <ul
          className={`flex-col w-[50%] flex-auto self-end bg-white px-5 gap-y-5`}
        >
          {tabs.map((tab, i) => (
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
          ))}
        </ul>
      </section>
    </nav>
  );
};

export default MobileNavbar;
