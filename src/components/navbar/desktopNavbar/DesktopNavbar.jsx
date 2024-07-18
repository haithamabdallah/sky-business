import { Fragment } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.jpeg";
import { tabs } from "../data";
import Search from "../components/search/Search";
const DesktopNavbar = () => {
  return (
    <nav className="hidden w-screen gap-x-10 md:flex bg-black px-3 sm:px-4 fixed top-0">
      <Link className="max-w-28" to="/">
        <img alt="logo" src={logo} />
      </Link>
      <ul className="flex-auto flex justify-center px-2 gap-x-3 items-center">
        {tabs.map((tab, i) => (
          <Fragment key={tab.name}>
            {tab.type === "search" ? (
              <li
                className={`text-white text-sm min-[1000px]:text-base ${
                  i === 5 ? "ml-auto" : ""
                }`}
              >
                <Search />
              </li>
            ) : (
              <li
                className={`text-white text-sm min-[1000px]:text-base hover:underline hover:underline-offset-[10px] ${
                  i === 5 ? "ml-auto" : ""
                }`}
              >
                <Link to={tab.route}>{tab.name}</Link>
              </li>
            )}
          </Fragment>
        ))}
      </ul>
    </nav>
  );
};

export default DesktopNavbar;
