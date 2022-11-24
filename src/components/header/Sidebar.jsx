import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../Context";

const Sidebar = () => {
  const { nav, setNav } = useContext(Context);

  return (
    <div className="bg-white w-1/3 absolute left-0 top-0 h-[90vh] items-left text-left sm:hidden z-10">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6 mx-2 mt-4 hover:bg-slate-400 hover:rounded-lg cursor-pointer"
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
      <ul className="mt-10 mx-1">
        <li className="p-1 font-semibold hover:bg-slate-400 hover:rounded-lg cursor-pointer ">
          <Link>Collections</Link>
        </li>
        <li className="p-1 font-semibold hover:bg-slate-400 hover:rounded-lg cursor-pointer">
          <Link>Men</Link>
        </li>
        <li className="p-1 font-semibold hover:bg-slate-400 hover:rounded-lg cursor-pointer">
          <Link>Women</Link>
        </li>
        <li className="p-1 font-semibold hover:bg-slate-400 hover:rounded-lg cursor-pointer">
          <Link>About</Link>
        </li>
        <li className="p-1 font-semibold hover:bg-slate-400 hover:rounded-lg cursor-pointer">
          <Link>Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
