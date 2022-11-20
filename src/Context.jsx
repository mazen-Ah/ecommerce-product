import React, { createContext } from "react";
const Context = createContext();

const ContextProvider = ({ children }) => {
  return <Context.Provider value="s">{children}</Context.Provider>;
};

export { ContextProvider, Context };
