import React, { useState } from "react";
import Btn from "./Btn";
import BtnCart from "./BtnCart";
import Price from "./Price";
import Img from "./Img";
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
  const [mainImg, setMainImg] = useState(imagesUrls[0]);
  return (
    <div className="flex sm:justify-between max-sm:w-full md:w-3/4 mx-auto max-sm:flex-col">
      <div className=" flex flex-col justify-center items-center max-w-md w-3/5 px-10 ">
        <div className="w-full mb-8 ">
          <img className="rounded-xl" src={mainImg.src} alt="" />
        </div>
        <div className="flex justify-between w-full">
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
      <div className="max-w-[50%] pt-12">
        <h3 className="text-main text-xs font-semibold">SNEAKER COMPANY</h3>
        <h2 className="text-4xl max-w-md font-semibold py-5">
          Fall Limited Edition Sneakers
        </h2>
        <p className="py-5 max-w-md opacity-60">
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
