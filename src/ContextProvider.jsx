import React, { createContext, useContext, useState } from "react";

// Create a Context
export const Context = createContext();

// Create a Provider component
const ContextProvider = ({ children }) => {
  const [state, setState] = useState({
    showPopup: false,
    showCookies: false,
    loading: true,
    showMargin: true,
    searchBlogPosts: [],
    searchBrands: [],
    images: [],
  });

  return (
    <Context.Provider value={{ state, setState }}>{children}</Context.Provider>
  );
};

export default ContextProvider;
