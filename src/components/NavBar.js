import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import "../index.css";

export default function NavBar() {
  return (
    <Navbar className='ingrid-nav' expand='lg'>
      <Navbar.Brand>
        <Link to='/' className='text-white'>
          Dra. Ingrid Telles de Abreu
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <Link to='/library' className='text-white p-2'>
            Library
          </Link>
          <Link to='/about' className='text-white p-2'>
            About
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
