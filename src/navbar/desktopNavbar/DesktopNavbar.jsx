import { Fragment, useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
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

  let typingTimer;
  const handleSearch = (e) => {
    const value = e.target.value;
    clearTimeout(typingTimer);
    typingTimer = setTimeout(() => {
      setTerm(value);
    }, 500);
  };

  return (
    <nav
      className={`hidden w-screen min-[1200px]:grid grid-cols-12 bg-white text-sm leading-5 font-medium
      top-0 z-10 font-futuraDemi pt-[.3125rem] px-[1.25rem] pb-[.1875rem] items-center
      transition-[height] duration-0 ${
        scrollStatus === "down" ? "w-0 h-0 static" : "w-auto h-[104px] fixed"
      }`}
    >
      <div className="col-span-2 flex items-center relative">
        <Link className="max-w-[10.9375rem] mr-auto" to="/">
          <img alt="logo" src={logo} />
        </Link>
      </div>

      <div className="col-span-8 flex mx-auto justify-between relative">
        <ul className="flex justify-center px-[.9375rem] mx-auto flex-wrap">
          {tabs.map((tab, i) => (
            <Fragment key={tab.name}>
              {
                <li
                  className={`text-[.875rem] leading-5 font-medium py-[.875rem] px-[1rem]`}
                >
                  <NavLink to={tab.route}>{tab.name.toUpperCase()}</NavLink>
                </li>
              }
            </Fragment>
          ))}
        </ul>
      </div>
      <Search setShow={setShow} show={show} />
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
