import React from "react";
import { Link } from "react-router";

const NavItems = () => {
  return (
    <>
      <ul className="flex gap-14 font-poppins font-semibold cursor-pointer text-[#4C4B42] dark:text-white">
        <li className="text-xl mt-3 relative navlink dark:hover:rounded-md dark:hover:text-[#FFFB8F]">
          <Link to="/">Home</Link>
        </li>
        <li className="text-xl mt-3 relative navlink dark:hover:text-[#FFFB8F]">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="text-xl mt-3 relative navlink dark:hover:text-[#FFFB8F]">
          <Link to="/resume">Resume</Link>
        </li>
      </ul>
    </>
  );
};

export default NavItems;
