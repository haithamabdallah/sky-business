import { Fragment, useContext, useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { tabs } from "../../sharedData/tabs";
import BlogCards from "../../components/blog/components/blogCards/BlogCards";
import SendRequest from "../../methods/fetchData";
import SideList from "./sideList/SideList";
import Search from "./search/Search";
import { Context } from "../../ContextProvider";
import CategoryBrands from "../../components/brands/components/brandCategories/categoryBrands/CategoryBrands";
import Logout from "../../logout/Logout";

const DesktopNavbar = ({ scrollStatus, clearSearch }) => {
  const url = import.meta.env.VITE_STORAGE_URL;
  const [show, setShow] = useState(false);
  const [term, setTerm] = useState("");

  const navigate = useNavigate();

  const { state } = useContext(Context);
  const logo = `${url}/${state.general.settings.logo}`;

  const { pathname } = useLocation();

  const handleChange = (e) => {
    setTerm(e.target.value);
  };
  useEffect(() => {
    if (scrollStatus === "down") {
      clearSearch(setTerm, setShow);
    }
  }, [scrollStatus]);

  const upperTabs = tabs.slice(0, 5);
  const restTabs = tabs.slice(5);
  const token = localStorage.getItem("token");

  return (
    <nav
      className={`hidden w-screen min-[1200px]:flex flex-col bg-white text-sm leading-5 font-medium
      top-0 z-10 font-futuraDemi fixed
      transition-transform duration-500 shadow ${
        scrollStatus === "down"
          ? "translate-y-[-110px]"
          : "translate-y-0 delay-100"
      }`}
    >
      <div className="w-full bg-[#004aad] flex justify-end items-center h-[40px]">
        <ul className="flex px-[1.25rem] ml-auto h-full">
          {upperTabs.map((tab, i) => {
            if (token && ["/login"].includes(tab.route)) return;
            return (
              <Fragment key={tab.name}>
                {
                  <li
                    className={`text-[.75rem] flex justify-center items-center
                      text-white leading-5 font-medium py-[10px]
                      px-[1rem]`}
                  >
                    <Link
                      onClick={() => clearSearch(setTerm, setShow)}
                      className="relative"
                      to={tab.route}
                    >
                      <span
                        className={`flex flex-row gap-2 place-items-center px-1`}
                      >
                        {["/login"].includes(tab.route) && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="12"
                            width="10"
                            viewBox="0 0 448 512"
                          >
                            <path
                              fill="#ffffff"
                              d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"
                            />
                          </svg>
                        )}{" "}
                        {tab.name.toUpperCase()}
                      </span>
                      {pathname === tab.route && (
                        <hr className="h-1 w-full bg-white absolute bottom-[-9.5px]" />
                      )}
                    </Link>
                  </li>
                }
              </Fragment>
            );
          })}
          {token && <Logout setShowSearch={setShow} setTerm={setTerm}/>}
        </ul>
      </div>

      <div className="grid grid-cols-12 relative px-[1.25rem] h-[70px]">
        <Link
          className="col-span-2 max-w-[10.9375rem] max-h-[70px] flex justify-center mx-auto"
          to="/"
          onClick={() => clearSearch(setTerm, setShow)}
        >
          <img alt="logo" src={logo} />
        </Link>
        <ul className="col-span-8 flex ml-auto justify-center items-center px-[.9375rem] mx-auto flex-wrap">
          {restTabs.map((tab, i) => (
            <Fragment key={tab.name}>
              {
                <li
                  className={`text-[.75rem] h-full leading-5 font-medium px-[1rem]`}
                  onClick={() => clearSearch(setTerm, setShow)}
                >
                  <NavLink className="h-full flex items-center" to={tab.route}>{tab.name.toUpperCase()}</NavLink>
                </li>
              }
            </Fragment>
          ))}
        </ul>
        <Search setShow={setShow} setTerm={setTerm} show={show} />
      </div>
      <form
        className={`w-full [pointer-events:all] col-span-12 z-index-10 flex flex-wrap items-center
          font-futura z-50 px-20 max-h-[70vh] overflow-auto [transition:opacity_0.5s,height_0.5s] ${
            show
              ? "opacity-100 h-[80px] overflow-visible"
              : "opacity-0 h-0 overflow-hidden"
          }`}
        onSubmit={(e) => {
          e.preventDefault();
          setShow(false);
          setTerm("");
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
          value={term}
          onChange={handleChange}
          type="text"
          name="search"
          className="outline-none font-semibold leading-[initial] text-[25px]
            p-[0.625rem] mx-[0.625rem] h-full flex-auto"
        />
      </form>
    </nav>
  );
};

export default DesktopNavbar;
