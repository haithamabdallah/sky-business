import React from "react";
import { useState } from "react";

const Search = ({ setShow, show }) => {
  return (
    <div className="flex items-start pr-[1.875rem]">
      <button
        className={`h-full bg-[#f1f2f2] border border-[#f1f2f2] rounded-[1.5625rem] text-[#000]
        px-[1.25rem] after:bg-[#000] after:h-[1.0625rem] after:w-[1.0625rem] after:inline-block
        after:[mask:url(./navbar/desktopNavbar/search/search.svg)_no-repeat_left/100%]
        after:align-middle hover:border hover:border-black focus:border focus:border-black
        ${show ? 'border border-black' : ''}`}
        onClick={() => setShow(!show)}
      >
        <span className="text-[12px] leading-4 font-semibold mr-[2.8125rem]">
          SEARCH
        </span>
      </button>
    </div>
  );
};

export default Search;
