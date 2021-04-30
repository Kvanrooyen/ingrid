import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <header>
      <div className='container mx-auto flex justify-between'>
        <nav className='flex mx-auto'>
          <NavLink
            to='/'
            exact
            className='inflex-flex items-center text-black text-4xl font-bold tracking-wideest py-4 px-4'
          >
            Library
          </NavLink>
          <NavLink
            to='/about'
            className='inflex-flex items-center text-black text-4xl font-bold tracking-wideest py-4 px-4'
          >
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
