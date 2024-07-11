import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    // Header section
    <header className=" w-full text-center bg-slate-800 text-white py-5 flex justify-around ">
      {/* Title of the store */}
      <h1 className=" text-xl uppercase">Movies Store </h1>
      {/* Navigation section */}
      <nav>
        <ul className="flex ">
          {/* Link to the Home page */}
          <li className="pr-5">
            <Link to="/">Home</Link>
          </li>
          {/* Link to the About page */}
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
