import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "../../atoms";

const Header = () => {
  const links = [
    { to: "/", name: "Home" },
    { to: "/about", name: "About" },
  ];
  return (
    // Header section
    <header className=" w-full text-center bg-slate-800 text-white py-5 flex justify-around ">
      {/* Title of the store */}
      <h1 className=" text-xl uppercase">Movies Store </h1>
      {/* Navigation section */}
      <Menu links={links} />
    </header>
  );
};

export default Header;
