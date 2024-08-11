import { Fragment, useContext, useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { tabs } from "../../sharedData/tabs";
import BlogCards from "../../components/blog/components/blogCards/BlogCards";
import SendRequest from "../../methods/fetchData";
import SideList from "./sideList/SideList";
import Search from "./search/Search";
import { Context } from "../../ContextProvider";
import CategoryBrands from "../../components/brands/components/brandCategories/categoryBrands/CategoryBrands";

let typingTimer;
const handleSearch = (e, setPosts, setBrands, setStatus, setLoading) => {
  clearTimeout(typingTimer);
  setPosts([]);
  setBrands([]);
  setStatus("");
  setLoading(false);
  if (e.target.value.length > 0) {
    typingTimer = setTimeout(() => {
      const value = e.target.value;
      setLoading(true);
      SendRequest({
        method: "post",
        endpoint: "search",
        body: { search: value },
      }).then((res) => {
        console.log("hello");
        if (res.status === "success") {
          document.querySelector("body").classList.add("overflow-hidden");
          setLoading(false);
          setStatus(res.status);
          setPosts(res.data.posts);
          setBrands(res.data.brands);
        }
      });
    }, 1500);
  }
};

const DesktopNavbar = ({ scrollStatus }) => {
  const url = import.meta.env.VITE_STORAGE_URL;
  const [show, setShow] = useState(false);
  const [posts, setPosts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const { value } = useContext(Context);
  const logo = `${url}/${value.settings.logo}`;

  const { pathname } = useLocation();

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
        <section
          tabIndex={0}
          className="w-full [pointer-events:all] col-span-12 z-index-10 flex flex-wrap items-center
          font-futura bg-white z-50 max-h-[70vh] overflow-auto"
          onBlur={(e) => {
            if (e.relatedTarget?.tagName === "A") return;
            document.querySelector("body").classList.remove("overflow-hidden");
            setPosts([]);
            setBrands([]);
            setStatus("");
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
            onChange={(e) =>
              handleSearch(e, setPosts, setBrands, setStatus, setLoading)
            }
            type="text"
            name="search"
            className="outline-none font-semibold leading-[initial] text-[25px] h-20
            px-[0.625rem] flex-auto"
            autoFocus
          />
          <div
            className="w-full"
            onClick={() => {
              document.querySelector("body").classList.remove("overflow-hidden");
              setPosts([]);
              setBrands([]);
              setStatus("");
              setShow(false);
            }}
          >
            {!loading && posts.length > 0 && <BlogCards posts={posts} />}
            {!loading && brands.length > 0 && (
              <CategoryBrands brands={brands} />
            )}
            {loading && posts.length === 0 && brands.length === 0 && (
              <div className="flex items-center justify-center min-h-20">
                <img alt="loading" src={logo} className="animate-breath w-36" />
              </div>
            )}

            {status.length > 0 && posts.length === 0 && brands.length === 0 && (
              <p
                className="flex items-center text-[24px] justify-center leading-7 flex-[0_0_auto]
                w-auto min-h-20"
              >
                There is no results with the term provided above.
              </p>
            )}
          </div>
        </section>
      )}
    </nav>
  );
};

export default DesktopNavbar;
