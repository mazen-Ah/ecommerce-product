import React from "react";
import Product from "./pages/Product";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ContextProvider } from "./Context";

const App = () => {
  return (
    <ContextProvider>
      <Router>
        <Routes>
          <Route index path="" element={<Product />}></Route>
          <Route index path="*" element={<h2>This Page not Found</h2>}></Route>
        </Routes>
      </Router>
    </ContextProvider>
  );
};

export default App;
