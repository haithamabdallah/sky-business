import { Fragment, useContext, useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { tabs } from "../../sharedData/tabs";
import BlogCards from "../../components/blog/components/blogCards/BlogCards";
import SendRequest from "../../methods/fetchData";
import SideList from "./sideList/SideList";
import Search from "./search/Search";
import { Context } from "../../ContextProvider";
import CategoryBrands from "../../components/brands/components/brandCategories/categoryBrands/CategoryBrands";

const DesktopNavbar = ({ scrollStatus }) => {
  const url = import.meta.env.VITE_STORAGE_URL;
  const [show, setShow] = useState(false);
  const [term, setTerm] = useState("");
  const navigate = useNavigate();

  const { value } = useContext(Context);
  const logo = `${url}/${value.settings.logo}`;

  const { pathname } = useLocation();

  useEffect(() => {
    if (scrollStatus === "down") setShow(false);
  }, [scrollStatus]);
  const upperTabs = tabs.slice(0, 4);
  const restTabs = tabs.slice(4);
  return (
    <nav
      className={`hidden w-screen min-[1200px]:flex flex-col bg-white text-sm leading-5 font-medium
      top-0 z-10 font-futuraDemi
      transition-[height] duration-0 ${
        scrollStatus === "down" ? "w-0 h-0 static" : "w-auto h-auto fixed"
      }`}
    >
      <div className="w-full bg-[#004aad] flex justify-end">
        <ul className="flex px-[1.25rem] pb-[.1875rem] ml-auto">
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
          className="col-span-2 max-w-[10.9375rem] max-h-[70px] flex justify-center mx-auto"
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
        <form
          tabIndex={0}
          className="w-full [pointer-events:all] col-span-12 z-index-10 flex flex-wrap items-center
          font-futura bg-white z-50 max-h-[70vh] overflow-auto"
          onSubmit={(e) => {
            e.preventDefault();
            setShow(false);
            navigate("/search", { state: { search: term } });
          }}
          onBlur={(e) => {
            
            if (e.relatedTarget?.name === "search_button") return;
            setShow(false);
          }}
        >
          <label
            htmlFor="search"
            className="pl-2 text-[25px] leading-7 flex-[0_0_auto] w-auto"
          >
            I'm Looking for...
          </label>
          <input
            onChange={(e) => setTerm(e.target.value)}
            type="text"
            name="search"
            className="outline-none font-semibold leading-[initial] text-[25px] h-20
            px-[0.625rem] flex-auto"
            autoFocus
          />
        </form>
      )}
    </nav>
  );
};

export default DesktopNavbar;
