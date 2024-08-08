import { Fragment, useContext, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { tabs } from "../../sharedData/tabs";
import SideList from "./sideList/SideList";
import Search from "./search/Search";
import { Context } from "../../ContextProvider";

const DesktopNavbar = ({ scrollStatus }) => {
  const url = import.meta.env.VITE_STORAGE_URL;
  const [term, setTerm] = useState("");
  const [show, setShow] = useState(false);

  const { value } = useContext(Context);
  const logo = `${url}/${value.settings.logo}`;

  const { pathname } = useLocation();

  let typingTimer;
  const handleSearch = (e) => {
    const value = e.target.value;
    clearTimeout(typingTimer);
    typingTimer = setTimeout(() => {
      setTerm(value);
    }, 500);
  };

  const upperTabs = tabs.slice(0, 4);
  const restTabs = tabs.slice(4);
  return (
    <nav
      className={`hidden w-screen min-[1200px]:flex flex-col bg-white text-sm leading-5 font-medium
      top-0 z-10 font-futuraDemi pt-[.3125rem]
      transition-[height] duration-0 ${
        scrollStatus === "down" ? "w-0 h-0 static" : "w-auto h-auto fixed"
      }`}
    >
      <div className="w-full bg-[#004aad]">
        <ul className="flex px-[1.25rem] pb-[.1875rem]">
          {upperTabs.map((tab, i) => (
            <Fragment key={tab.name}>
              {
                <li
                  className={`text-[.75rem] text-white leading-5 font-medium py-[.875rem] px-[1rem]`}
                >
                  <Link
                    className={`${
                      pathname === tab.route
                        ? "underline decoration-white decoration-4 underline-offset-[10px]"
                        : ""
                    }`}
                    to={tab.route}
                  >
                    {tab.name.toUpperCase()}
                  </Link>
                </li>
              }
            </Fragment>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-12 relative px-[1.25rem] pb-[.1875rem]">
        <Link
          className="col-span-2 max-w-[10.9375rem] flex justify-center mx-auto"
          to="/"
        >
          <img alt="logo" src={logo} />
        </Link>
        <ul className="col-span-8 flex ml-auto justify-center items-center px-[.9375rem] mx-auto flex-wrap">
          {restTabs.map((tab, i) => (
            <Fragment key={tab.name}>
              {
                <li
                  className={`text-[.75rem] leading-5 font-medium py-[.875rem] px-[1rem]`}
                >
                  <NavLink to={tab.route}>{tab.name.toUpperCase()}</NavLink>
                </li>
              }
            </Fragment>
          ))}
        </ul>
        <Search setShow={setShow} show={show} />
      </div>
      {show && (
        <section
          className="w-full col-span-12 z-index-10 flex items-center font-futura bg-white z-50"
          onBlur={() => setShow(false)}
        >
          <label
            htmlFor="search"
            className="text-[34px] leading-7 flex-[0_0_auto] w-auto"
          >
            I'm Looking for...
          </label>
          <input
            onChange={handleSearch}
            type="text"
            name="search"
            className="outline-none font-semibold leading-[initial] text-[2.125rem] h-20 px-[0.625rem] flex-auto"
            autoFocus
          />
        </section>
      )}
    </nav>
  );
};

export default DesktopNavbar;
