import React, { useState, useContext } from "react";
import BtnCart from "./BtnCart";
import { Context } from "../../Context";
const Btn = () => {
  const { num, setNum } = useContext(Context);
  return (
    <div className="flex gap-1 h-full">
      <button
        onClick={() => {
          setNum((prevNum) => (prevNum == 0 ? prevNum : prevNum - 1));
        }}
        className="bg-[#F7F8FD] w-10 h-10  hover:opacity-60 text-center  rounded flex justify-center items-center text-main text-3xl"
      >
        -
      </button>
      <div className="bg-[#F7F8FD] w-10 h-10 text-center  rounded flex justify-center items-center  text-l">
        {num}
      </div>
      <button
        onClick={() => {
          setNum((prevNum) => prevNum + 1);
        }}
        className="bg-[#F7F8FD] w-10 h-10 hover:opacity-60  text-center rounded flex justify-center items-center text-main text-3xl"
      >
        +
      </button>
      <BtnCart />
    </div>
  );
};

export default Btn;
