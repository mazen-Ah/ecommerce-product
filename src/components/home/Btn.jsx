import React, { useState, useContext } from "react";
import BtnCart from "./BtnCart";
import { Context } from "../../Context";
const Btn = () => {
  const { num, setNum } = useContext(Context);
  return (
    <div className="flex space-x-2 max-sm:flex-col justify-center items-center">
      <div className="flex w-2/5 space-x-1 max-sm:w-full justify-center items-center">
        <button className="flex max-sm:max-w-full  max-sm:w-5/6 justify-center items-center  max-sm:rounded-xl">
          <span
            onClick={() => {
              setNum((prevNum) => (prevNum ? prevNum - 1 : prevNum));
            }}
            className="bg-[#F7F8FD] w-10 max-sm:w-full hover:opacity-60 text-center rounded flex justify-center items-center text-main text-3xl"
          >
            -
          </span>
          <span className="bg-[#F7F8FD]  max-sm:w-full  w-10 h-10 text-center cursor-default rounded flex justify-center items-center  text-l">
            {num}
          </span>
          <span
            onClick={() => {
              setNum((prevNum) => prevNum + 1);
            }}
            className="bg-[#F7F8FD] w-10 max-sm:w-full  h-10 hover:opacity-60  text-center rounded flex justify-center items-center text-main text-3xl"
          >
            +
          </span>
        </button>
        <BtnCart />
      </div>
    </div>
  );
};

export default Btn;
