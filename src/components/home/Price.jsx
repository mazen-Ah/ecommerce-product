import React, { useState, useContext } from "react";
import { Context } from "../../Context";
import Btn from "./Btn";

const Price = () => {
  const { price, discounts } = useContext(Context);
  const pri = () => {
    if (discounts) {
      return (
        <>
          <div className="flex sm:flex-col justify-between max-sm:w-full max-sm:p-4 max-sm:pb-0">
            <div className="flex items-center  ">
              <div>${price - (price * discounts) / 100}</div>
              <span className="text-main text-sm ml-4 bg-amber-100 w-10 text-center rounded h-5">
                {discounts}%
              </span>
            </div>
            <span className="text-base opacity-30 line-through my-3">
              ${price}
            </span>
          </div>
        </>
      );
    } else {
      return <div>{`$${price}`}</div>;
    }
  };
  return (
    <div>
      <div className="text-3xl font-semibold flex items-center whitespace-normal flex-">
        {pri()}
      </div>
      <Btn />
    </div>
  );
};

export default Price;
