import React, { useState, useContext } from "react";
import Btn from "./Btn";
import BtnCart from "./BtnCart";
import Price from "./Price";
import Img from "./Img";
import { Context } from "../../Context";
import { useEffect } from "react";
const imagesUrls = [
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
];
const Home = () => {
  const [countSlide, setCountSlide] = useState(0);
  const [mainImg, setMainImg] = useState(imagesUrls[countSlide]);
  console.log();
  const handleIncrement = () => {
    setCountSlide(
      countSlide < imagesUrls.length - 1 ? countSlide + 1 : countSlide
    );
  };
  const handleDecrement = () => {
    setCountSlide(countSlide > 0 ? countSlide - 1 : countSlide);
  };
  useEffect(() => {
    setMainImg(imagesUrls[countSlide]);
  }, [countSlide]);
  return (
    <div className="flex sm:justify-between max-sm:w-full md:w-3/4 mx-auto max-sm:flex-col ">
      <div className=" flex flex-col justify-center items-center max-w-md sm:px-10 ">
        <div className={`w-72 relative sm:mb-8 max-sm:mb-4 min-w-full `}>
          <button className="sm:hidden flex items-center justify-center absolute bg-white top-1/2 left-3 w-10 h-10 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="3"
              stroke="currentColor"
              className="w-6 h-6 font-extrabold cursor-pointer"
              onClick={handleDecrement}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <img className="sm:rounded-xl " src={mainImg.src} alt="" />
          <button className="sm:hidden absolute bg-white top-1/2 right-3 w-10 h-10 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="3"
              stroke="currentColor"
              className="w-6 h-6 cursor-pointer"
              onClick={handleIncrement}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
        <div className=" flex justify-between w-full max-sm:hidden">
          {imagesUrls.map((img) => {
            return (
              <Img
                key={img.id}
                img={img}
                setMainImg={setMainImg}
                active={img.id === mainImg.id}
              />
            );
          })}
        </div>
      </div>
      <div className="sm:max-w-[50%] sm:pt-12 max-sm:p-4 ">
        <h3 className="text-[#DAA874] text-xs font-semibold">
          SNEAKER COMPANY
        </h3>
        <h2 className="text-4xl sm:max-w-md max-sm:max-w-xs max-sm:text-3xl font-semibold sm:py-5 max-sm:py-3">
          Fall Limited Edition Sneakers
        </h2>
        <p className="sm:py-5 max-w-md opacity-60 mb-2 max-sm:max-w-xs">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a-durable rubber outer sole, they'll withstand everything
          the weather can offer
        </p>
        <Price />
      </div>
    </div>
  );
};

export default Home;
