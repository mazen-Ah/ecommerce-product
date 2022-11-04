import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between p-10">
      <div className="flex gap-x-14 items-center">
        <h1 className="">sneakers</h1>
        <nav className="">
          <ul className="flex gap-x-10 items-center">
            <li className="px-4">Collections</li>
            <li className="px-4">Men</li>
            <li className="px-4">Women</li>
            <li className="px-4">About</li>
            <li className="px-4">Contact</li>
          </ul>
        </nav>
      </div>
      <div className="px-4">
        <div>a</div>
        <img src="" alt="" />
      </div>
    </header>
  );
};

export default Header;
