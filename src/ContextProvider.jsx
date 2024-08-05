import React, { createContext, useContext, useState } from 'react';

// Create a Context
export const Context = createContext();

// Create a Provider component
const ContextProvider = ({ children }) => {
  const [value, setValue] = useState({});
  
  return (
    <Context.Provider value={{ value, setValue }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;