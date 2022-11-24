import React, { useState, createContext } from "react";
const Context = createContext();

const ContextProvider = ({ children }) => {
  const [nav, setNav] = useState(false);
  const [num, setNum] = useState(0);
  const [numberOfProducts, setNumberOfProducts] = useState(0);
  const [price, setPrice] = useState(250.0);
  const [discounts, setDiscounts] = useState(60);
  const [imagesUrls, setImagesUrls] = useState([
    {
      thumbnail: "/assets/image-product-1-thumbnail.jpg",
      src: "/assets/image-product-1.jpg",
      alt: "",
      id: 1,
    },
    {
      thumbnail: "/assets/image-product-2-thumbnail.jpg",
      src: "/assets/image-product-2.jpg",
      alt: "",
      id: 2,
    },
    {
      thumbnail: "/assets/image-product-3-thumbnail.jpg",
      src: "/assets/image-product-3.jpg",
      alt: "",
      id: 3,
    },
    {
      thumbnail: "/assets/image-product-4-thumbnail.jpg",
      src: "/assets/image-product-4.jpg",
      alt: "",
      id: 4,
    },
  ]);

  return (
    <Context.Provider
      value={{
        imagesUrls,
        price,
        discounts,
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
