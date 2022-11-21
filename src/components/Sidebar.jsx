import React, { useContext } from "react";
import { Context } from "../Context";

const Sidebar = () => {
  const { nav, setNav } = useContext(Context);

  return (
    <div className="bg-red-700 w-1/4 absolute left-0 top-0 h-[90vh] items-center text-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6 mx-auto "
        onClick={() => {
          setNav(false);
        }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
      <ul>
        <li className="">Collections</li>
        <li className="">Men</li>
        <li className="">Women</li>
        <li className="">About</li>
        <li className="">Contact</li>
      </ul>
    </div>
  );
};

export default Sidebar;
