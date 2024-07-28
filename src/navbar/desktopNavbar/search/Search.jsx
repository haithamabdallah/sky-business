import React from "react";
import { useState } from "react";

const Search = ({ setShow, show }) => {
  return (
    <div className="flex items-center pr-[1.875rem]">
      <button
        className={`after:bg-[#000] after:h-[1.0625rem] after:w-[1.0625rem] after:inline-block
        after:[mask:url(./navbar/desktopNavbar/search/search.svg)_no-repeat_left/100%]
        after:align-middle`}
        onClick={() => setShow(!show)}
      >
      </button>
    </div>
  );
};

export default Search;
