import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.jpeg";
import { tabs } from "../data";
import SideList from "./sideList/SideList";
import Search from "./search/Search";
const DesktopNavbar = () => {
  const [term, setTerm] = useState("");
  const [show, setShow] = useState(false);
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
      className="hidden w-screen min-[1200px]:flex flex-wrap bg-white text-sm leading-5 font-medium
      fixed top-0 z-10 font-futuraDemi pt-[.3125rem] px-[1.25rem] pb-[.1875rem] items-center"
    >
        <Link className="max-w-[10.9375rem] mr-auto" to="/">
          <img alt="logo" src={logo} />
        </Link>

      <div className="flex flex-auto justify-between relative">
        <ul className="flex max-w-[75em] px-[.9375rem] mx-auto">
          {tabs.map((tab, i) => (
            <Fragment key={tab.name}>
              {
                <li
                  className={`text-[.875rem] leading-5 font-medium py-[.875rem] px-[1rem]`}
                >
                  <Link to={tab.route}>{tab.name.toUpperCase()}</Link>
                </li>
              }
            </Fragment>
          ))}
        </ul>
        <Search setShow={setShow} show={show}/>
      </div>
      {show && (
        <section
          className="w-screen max-w-[75rem] z-index-10 flex items-center font-futura bg-white z-50"
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
