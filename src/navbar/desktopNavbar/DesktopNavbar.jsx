import { Fragment } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.jpeg";
import { tabs } from "../data";
import SideList from "./sideList/SideList";
const DesktopNavbar = () => {
  return (
    <nav
      className="hidden w-screen min-[1200px]:flex flex-col bg-white px-[30px] text-sm leading-5 font-medium
    sm:px-4 fixed top-0 z-10 font-futuraDemi"
    >
      <div className="flex items-center">
        <Link className="max-w-[10.9375rem]" to="/">
          <img alt="logo" src={logo} />
        </Link>
        <SideList />
      </div>

      <ul className="flex px-2 gap-x-[30px] items-center max-w-[75em] mx-auto pb-5">
        {tabs.map((tab, i) => (
          <Fragment key={tab.name}>
            {
              <li className={`text-[.875rem] leading-5 font-medium`}>
                <Link to={tab.route}>{tab.name.toUpperCase()}</Link>
              </li>
            }
          </Fragment>
        ))}
      </ul>
    </nav>
  );
};

export default DesktopNavbar;
