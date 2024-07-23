import React from "react";
import { useState } from "react";

const Search = () => {
  const [term, setTerm] = useState("");
  const [show, setShow] = useState(false);
  const [foucs, setFoucs] = useState(false);
  let typingTimer;
  const handleSearch = (e) => {
    const value = e.target.value;
    clearTimeout(typingTimer);
    typingTimer = setTimeout(() => {
      setTerm(value);
    }, 500);
  };
  return (
    <div>
      <button className="mt-2" onClick={() => setShow(true)}>
        <svg
          width="24"
          height="24"
          className="scale-[0.625]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.19 3.19c4.253-4.253 11.149-4.253 15.402 0 3.976 3.976 4.235 10.263.775 14.54.067.069.134.135.199.2l.6.6 1.058 1.059.13.13.288.288.693.692.846.846.48.481a1.156 1.156 0 01-1.526 1.732l-.109-.097-4.294-4.295c-4.277 3.46-10.565 3.203-14.543-.775-4.252-4.253-4.252-11.148 0-15.401zm13.113 1.768a8.031 8.031 0 10.266.254z"
            fillRule="evenodd"
          />
        </svg>
      </button>
      {show && (
        <section className="w-screen h-screen absolute top-0 left-0 bg-white flex flex-col z-50 pt-10">
          <button
            className="absolute right-4 top-13"
            onClick={() => {
              setTerm("");
              setShow(false);
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
            onChange={handleSearch}
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
        </section>
      )}
    </div>
  );
};

export default Search;
