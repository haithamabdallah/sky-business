import React from "react";
import { useState } from "react";

const Search = () => {
  const [term, setTerm] = useState("");
  const [show, setShow] = useState(false);
  const handleSearch = () => {
    console.log({ term });
    setShow(false);
  };
  return (
    <div className="relative">
      <button className="mt-2"
        onClick={() => setShow(!show)}
      >
        {show ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="white"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="white"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        )}
      </button>
      {show && (
        <section
          className="z-50 h-fit mt-[10px] items-end flex absolute bg-black w-[70vw] md:w-[20vw] right-0
        top-[34px] border rounded-md border-white"
        >
          <input
            className="bg-transparent p-[6px] border-none outline-none placeholder-white
        placeholder-opacity-80 w-full"
            type="text"
            placeholder="Search"
            onChange={(e) => setTerm(e.target.value)}
          />
          <button
            className="absolute right-3 min-[950px]:right-1 top-[6px]"
            onClick={handleSearch}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="white"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </section>
      )}
    </div>
  );
};

export default Search;
