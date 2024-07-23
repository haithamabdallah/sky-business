import { Fragment } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.jpeg";
import { tabs } from "../data";
const DesktopNavbar = () => {
  return (
    <nav
      className="hidden w-screen h-[54px] min-[1200px]:flex flex-col bg-white px-[30px] text-sm leading-5 font-medium
    sm:px-4 fixed top-0 z-10 font-futuraDemi"
    >
      <div className="max">
        <Link className="max-w-28" to="/">
          <img alt="logo" src={logo} />
        </Link>
        <ul></ul>
      </div>

      <ul className="flex px-2 gap-x-[30px] items-center max-w-[75em] mx-auto">
        {tabs.map((tab, i) => (
          <Fragment key={tab.name}>
            {
              <li
                className={`text-sm min-[1000px]:text-base hover:underline hover:underline-offset-[10px]`}
              >
                <Link to={tab.route}>{tab.name}</Link>
              </li>
            }
          </Fragment>
        ))}
      </ul>
    </nav>
  );
};

export default DesktopNavbar;
