import React, { useContext } from "react";
import { Context } from "../../Context";

const Cart = () => {
  const { numberOfProducts } = useContext(Context);

  return (
    <div className="max-sm:hidden flex flex-col rounded-lg sm:absolute sm:-left-60 sm:top-full z-10 sm:bg-slate-500 sm:w-72  sm:h-40">
      <div className="shadow flex">
        <h1 className="justify-start py-4 px-5 text-sm font-black">Cart</h1>
      </div>
      <div>
        <img src="" alt="" />
        <p>{`Fall Limited Edition Sneakers x ${numberOfProducts}`}</p>
        <span></span>
      </div>
      <div>
        <button></button>
      </div>
    </div>
  );
};

export default Cart;
