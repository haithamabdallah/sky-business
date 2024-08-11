import React from "react";
import BlogCards from "../../../../components/blog/components/blogCards/BlogCards";
import SendRequest from "../../../../methods/fetchData";
import { useState } from "react";
import CategoryBrands from "../../../../components/brands/components/brandCategories/categoryBrands/CategoryBrands";

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
        if (res.status === "success") {
          setLoading(false);
          setStatus(res.status);
          setPosts(res.data.posts);
          setBrands(res.data.brands);
        }
      });
    }, 1500);
  }
};

const Search = ({ logo }) => {
  const [show, setShow] = useState(false);
  const [foucs, setFoucs] = useState(false);
  const [brands, setBrands] = useState([]);
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  return (
    <div>
      <button
        className="mt-2"
        type="button"
        onClick={(e) => {
          setShow(!show);
          document.querySelector("body").classList.toggle("overflow-hidden");
          setPosts([]);
          setBrands([]);
          setStatus("");
          setLoading(false);
        }}
      >
        <svg
          width="24"
          height="24"
          className="scale-[0.625] pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="pointer-events-none"
            d="M3.19 3.19c4.253-4.253 11.149-4.253 15.402 0 3.976 3.976 4.235 10.263.775 14.54.067.069.134.135.199.2l.6.6 1.058 1.059.13.13.288.288.693.692.846.846.48.481a1.156 1.156 0 01-1.526 1.732l-.109-.097-4.294-4.295c-4.277 3.46-10.565 3.203-14.543-.775-4.252-4.253-4.252-11.148 0-15.401zm13.113 1.768a8.031 8.031 0 10.266.254z"
            fillRule="evenodd"
          />
        </svg>
      </button>
      {show && (
        <>
          <section className="w-screen h-screen absolute top-0 left-0 bg-white flex lg:hidden flex-col z-50 pt-10">
            <button
              className="absolute right-4 top-13"
              onClick={() => {
                setShow(false);
                document
                  .querySelector("body")
                  .classList.remove("overflow-hidden");
                setPosts([]);
                setBrands([]);
                setStatus("");
                setLoading(false);
              }}
            >
              <svg
                width="22"
                height="22"
                xmlns="http://www.w3.org/2000/svg"
                className="scale-[0.6818181818181818]"
              >
                <path
                  d="M21 1 1 21m20 0L1 1"
                  stroke="#000"
                  strokeWidth="1.5"
                  fill="none"
                />
              </svg>
            </button>
            <label
              htmlFor="search"
              className={`max-w-full p-[0_.3125rem] overflow-hidden pointer-events-none absolute
              text-left left-4 [transition:transform_.2s,_font-size_.2s,_left_.2s] 
              whitespace-nowrap w-auto z-[1]
            ${
              foucs
                ? "h-auto top-3 text-[.6875rem] [transform:translate3d(0,-.5rem,0)] text-[#626566] font-light"
                : `[transform:translateZ(0)] top-13 h-[3.125rem] text-[12px] font-normal`
            }`}
            >
              I'm Looking for...
            </label>
            <input
              onChange={(e) =>
                handleSearch(e, setPosts, setBrands, setStatus, setLoading)
              }
              onFocus={() => setFoucs(true)}
              onBlur={(e) => {
                if (!e.target.value) setFoucs(false);
              }}
              type="text"
              name="search"
              className="outline-none py-[0.25rem] px-[0.3125rem]
            h-[2.1rem] text-[14px] font-semibold"
              autoFocus
            />
            <div
              className="w-full bg-white overflow-auto"
              onClick={() => {
                setPosts([]);
                setBrands([]);
                setStatus("");
                setLoading(false);
                document
                  .querySelector("body")
                  .classList.remove("overflow-hidden");
                setShow(false);
              }}
            >
              {!loading && posts.length > 0 && <BlogCards posts={posts} />}
              {!loading && brands.length > 0 && (
                <CategoryBrands brands={brands} />
              )}
              {loading && posts.length === 0 && brands.length === 0 && (
                <div className="flex items-center justify-center min-h-20">
                  <img
                    alt="loading"
                    src={logo}
                    className="animate-breath w-36"
                  />
                </div>
              )}

              {status.length > 0 &&
                posts.length === 0 &&
                brands.length === 0 && (
                  <p
                    className="flex items-center text-[24px] justify-center leading-7 flex-[0_0_auto]
                w-auto min-h-20"
                  >
                    There is no results with the term provided above.
                  </p>
                )}
            </div>
          </section>
          <section
            tabIndex="0"
            className="w-screen z-index-10 absolute left-0 hidden lg:flex flex-wrap items-center font-futura
            bg-white z-50 pointer-events-auto max-h-[450px] overflow-auto"
          >
            <label
              htmlFor="search"
              className="text-[25px] leading-7 flex-[0_0_auto] w-auto"
            >
              I'm Looking for...
            </label>
            <input
              onChange={(e) =>
                handleSearch(e, setPosts, setBrands, setStatus, setLoading)
              }
              type="text"
              name="search"
              className="outline-none font-semibold leading-[initial] text-[25px] h-20 px-[0.625rem] flex-auto"
              autoFocus
            />
            <div
              className="w-full"
              onClick={() => {
                setPosts([]);
                setBrands([]);
                setStatus("");
                setLoading(false);
                document
                  .querySelector("body")
                  .classList.remove("overflow-hidden");
                setShow(false);
              }}
            >
              {!loading && posts.length > 0 && <BlogCards posts={posts} />}
              {!loading && brands.length > 0 && (
                <CategoryBrands brands={brands} />
              )}
              {loading && posts.length === 0 && brands.length === 0 && (
                <div className="flex items-center justify-center min-h-20">
                  <img
                    alt="loading"
                    src={logo}
                    className="animate-breath w-36"
                  />
                </div>
              )}

              {status.length > 0 &&
                posts.length === 0 &&
                brands.length === 0 && (
                  <p
                    className="flex items-center text-[24px] justify-center leading-7 flex-[0_0_auto]
                w-auto min-h-20"
                  >
                    There is no results with the term provided above.
                  </p>
                )}
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default Search;
