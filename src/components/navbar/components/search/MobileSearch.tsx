import React from "react";
import { useState } from "react";

const MobileSearch = () => {
  const [term, setTerm] = useState("");
  const handleSearch = () => {
    console.log({ term });
  };
  return (
    <section className="relative flex-none flex items-center justify-end">
      <input
        className="bg-transparent p-[6px] outline-none placeholder-white
        placeholder-opacity-80 border rounded-md border-white w-[70%] text-white"
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
  );
};

export default MobileSearch;
