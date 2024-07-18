import { Link } from "react-router-dom";
import logo from "../logo.jpeg";
import { tabs } from "../data";
import { useState } from "react";
import MenuIcon from "./menuIcon/MenuIcon";
import Search from "../components/search/Search";
const MobileNavbar = () => {
  const [show, setShow] = useState(false);
  return (
    <nav className="flex md:hidden bg-black px-3 sm:px-4 relative">
      <MenuIcon show={show} setShow={setShow} />
      <ul
        className={` ${
          show ? "flex" : "hidden"
        } flex-col absolute w-fit left-0 px-2 items-center bg-black`}
      >
        {tabs.map(
          (tab, i) =>
            i !== 5 && (
              <li
                key={i}
                className={`text-white text-sm min-[1000px]:text-base hover:underline hover:underline-offset-[10px]`}
              >
                <Link to={tab.route} onClick={() => setShow(false)}>
                  {tab.name}
                </Link>
              </li>
            )
        )}
      </ul>
      <Link
        className={`w-28 ${show ? "ml-auto" : "ml-2 mr-auto"} self-center`}
        onClick={() => setShow(false)}
        to="/"
      >
        <img alt="logo" src={logo} />
      </Link>
      <Search />
    </nav>
  );
};

export default MobileNavbar;
