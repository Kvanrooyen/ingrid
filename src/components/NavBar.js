import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ toggle }) => {
  return (
    <nav className='flex justify-between items-center h-12 ingrid-main relative text-xl'>
      <Link to='/' className='pl-4 text-black'>
        Dra. Ingrid Telles de Abreu
      </Link>
      <div className='px-4 cursor-pointer md:hidden' onClick={toggle}>
        <svg
          className='w-6 h-6'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      </div>
      <div className='pr-8 md:block hidden'>
        <Link className='pl-4 text-black' to='/library'>
          Library
        </Link>
        <Link className='pl-4 text-black' to='/about'>
          About
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
