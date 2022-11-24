import React, { useContext } from "react";
import { Context } from "../../Context";

const Cart = () => {
  const { numberOfProducts, price, discounts } = useContext(Context);

  return (
    <div className="max-sm:hidden flex flex-col rounded-lg sm:absolute sm:-left-60 sm:top-full z-10 sm:bg-white sm:w-72  sm:h-48 shadow-2xl">
      <div className="shadow flex">
        <h1 className="justify-start py-4 px-5 text-sm font-black">Cart</h1>
      </div>
      <div className="flex flex-wrap justify-center items-center px-4">
        {numberOfProducts === 0 && (
          <h1 className="translate-y-8 opacity-60">Your cart is empty</h1>
        )}
        {numberOfProducts > 0 && (
          <>
            <div className="flex lex-w p-4 w-full">
              <div className="w-14 flex">
                <img src="/assets/image-product-1-thumbnail.jpg" alt="" />
              </div>
              <p>
                <span className="opacity-40">{`Fall Limited Edition Sneakers $${price} x ${numberOfProducts} `}</span>
                <span className="font-extrabold">
                  ${price * numberOfProducts}
                </span>
              </p>
            </div>

            <button className="bg-[#FF7D1B] w-full rounded-2xl p-3 text-white font-semibold">
              Checkout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
