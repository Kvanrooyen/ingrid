import React from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? "grid grid-rows-2 text-left items-center ingrid-main"
          : "hidden"
      }
      onClick={toggle}
    >
      <Link className='pl-4 p-3 text-black' to='/library'>
        Library
      </Link>
      <Link className='pl-4 p-3 text-black' to='/about'>
        About
      </Link>
    </div>
  );
};

export default Dropdown;
