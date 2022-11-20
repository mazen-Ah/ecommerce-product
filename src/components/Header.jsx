import React from "react";
import { Link } from "react-router-dom";
import avatar from "../../public/assets/imageAvatar.png";
import cartIcon from "../../public/assets/icon-cart.svg";

const Header = () => {
  return (
    <header className="flex gap-10 flex justify-between container px-6 py-4 shadow mx-auto items-center text-center ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className=" w-1/12 sm:hidden"
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
        <ul className="flex gap-4">
          <li className="sm:p-1 ">
            <Link className="sm:p-1 opacity-60 hover:opacity-100">
              Collections
            </Link>
          </li>
          <li className="sm:p-1">
            <Link className=" sm:p-1 opacity-60 hover:opacity-100 after:content-['']">
              Men
            </Link>
          </li>
          <li className="sm:p-1">
            <Link className="sm:p-1 opacity-60 hover:opacity-100">Women</Link>
          </li>
          <li className="sm:p-1">
            <Link className="sm:p-1 opacity-60 hover:opacity-100">About</Link>
          </li>
          <li className="sm:p-1">
            <Link className="sm:p-1 opacity-60 hover:opacity-100">Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="flex justify-between items-center max-sm:min-w-[5rem] w-20 h-14">
        <img className=" leading-3 cursor-pointer" src={cartIcon} />
        <img className="h-1/2 leading-3 cursor-pointer" src={avatar} />
      </div>
    </header>
  );
};

export default Header;
