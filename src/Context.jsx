import React, { useState, createContext } from "react";
const Context = createContext();

const ContextProvider = ({ children }) => {
  const [nav, setNav] = useState(false);
  const [num, setNum] = useState(0);
  const [numberOfProducts, setNumberOfProducts] = useState(0);

  return (
    <Context.Provider
      value={{
        nav,
        setNav,
        num,
        setNum,
        numberOfProducts,
        setNumberOfProducts,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
