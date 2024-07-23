import { Link } from "react-router-dom";
import logo from "../logo.jpeg";
import { tabs } from "../data";
import { useState } from "react";
import MenuIcon from "./menuIcon/MenuIcon";
import Items from "./items/Items";
const MobileNavbar = () => {
  const [show, setShow] = useState(false);
  return (
    <nav
      className={`flex md:hidden bg-white ${
        show ? "" : "px-[15px]"
      } h-[54px] z-50 relative items-center font-futura`}
    >
      <Link
        className={`max-w-[6.5625rem] ${show ? "hidden" : "mr-auto"}`}
        onClick={() => setShow(false)}
        to="/"
      >
        <img alt="logo" src={logo} />
      </Link>
      {show === false && <Items />}
      <MenuIcon show={show} setShow={setShow} />
      <section
        className={`${
          show ? "flex" : "hidden"
        } w-full h-screen flex-col absolute right-0 top-0 bg-black bg-opacity-40`}
      >
        <div className="w-full h-[54px] flex items-center bg-black z-10 font-futura text-sm leading-5">
          <Link
            to="/register"
            onClick={() => setShow(false)}
            className="text-white underline w-full text-center"
          >
            Sign in or sign up
          </Link>
        </div>
        <ul
          className={`flex-col w-[90%] flex-auto self-end bg-white px-5 gap-y-5`}
        >
          {tabs.map((tab, i) => (
            <li key={i} className={`text-xs py-5 leading-5`}>
              <Link to={tab.route} onClick={() => setShow(false)}>
                {tab.name.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </nav>
  );
};

export default MobileNavbar;
