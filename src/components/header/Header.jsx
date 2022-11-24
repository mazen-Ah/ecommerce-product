import React, { useState, useContext } from "react";
import Cart from "./Cart";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { Context } from "../../Context";

const Header = () => {
  const { nav, setNav, numberOfProducts } = useContext(Context);
  const [cart, setCart] = useState(false);
  return (
    <header className="relative flex gap-10 justify-between container px-6 py-4 shadow mx-auto items-center text-center sm:mb-20 ">
      {nav && <Sidebar />}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className=" w-1/12 sm:hidden cursor-pointer hover:text-main hover:transition-all"
        onClick={() => {
          setNav(true);
        }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
        />
      </svg>

      <h1 className="text-3xl">
        <Link to={""}>sneakers</Link>
      </h1>
      <nav className="flex max-sm:hidden">
        <ul className="flex gap-4 ">
          <li className="sm:p-1 group relative after:content-[''] after:absolute after:left-0 after:-bottom-[90%] hover:after:bg-main after:w-full after:h-1 after:rounded-t">
            <Link className="sm:p-1 opacity-60 group-hover:opacity-100">
              Collections
            </Link>
          </li>
          <li className="sm:p-1  group  relative after:content-[''] after:absolute after:left-0 after:-bottom-[90%] hover:after:bg-main after:w-full after:h-1 after:rounded-t">
            <Link className=" sm:p-1 opacity-60 group-hover:opacity-100 ">
              Men
            </Link>
          </li>
          <li className="sm:p-1  group  relative after:content-[''] after:absolute after:left-0 after:-bottom-[90%] hover:after:bg-main after:w-full after:h-1 after:rounded-t">
            <Link className="sm:p-1 opacity-60 group-hover:opacity-100">
              Women
            </Link>
          </li>
          <li className="sm:p-1 transform group relative after:content-[''] after:absolute after:left-0 after:-bottom-[90%] hover:after:bg-main after:w-full after:h-1 after:rounded-t">
            <Link className="sm:p-1 opacity-60 group-hover:opacity-100">
              About
            </Link>
          </li>
          <li className="sm:p-1   group relative after:content-[''] after:absolute after:left-0 after:-bottom-[90%] hover:after:bg-main after:w-full after:h-1 after:rounded-t">
            <Link className="sm:p-1 opacity-60 group-hover:opacity-100">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex justify-between items-center max-sm:min-w-[5rem] w-20 h-14 relative">
        <div className=" relative">
          {numberOfProducts > 0 && (
            <span className="absolute w-4  bg-main rounded-3xl text-white font-semibold -top-2 -right-1 z-10 text-xs text-center">
              {numberOfProducts}
            </span>
          )}

          <div className={`leading-3 relative cursor-pointer `}>
            <img
              className="w-full"
              src="../../assets/icon-cart.svg"
              onClick={() => {
                setCart((prevCart) => !prevCart);
              }}
            />
          </div>
          {cart && <Cart />}
        </div>
        <div className="max-w-[2rem] leading-3 cursor-pointer">
          <img className="w-full" src="../../assets/imageAvatar.png" />
        </div>
      </div>
    </header>
  );
};

export default Header;
