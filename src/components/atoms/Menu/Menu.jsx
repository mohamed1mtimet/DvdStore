import React from "react";
import { Link } from "react-router-dom";

const Menu = ({ links, ...rest }) => {
  return (
    <nav>
      <ul className="flex ">
        {/* Link to the Home page */}
        {links.map((link, index) => {
          return (
            <li key={index} className="pr-5">
              <Link to={link.to}>{link.name} </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Menu;
