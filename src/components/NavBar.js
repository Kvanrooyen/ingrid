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
          Ingrid Telles de Abreu
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link>
            <Link to='/library' className='text-white'>
              Library
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/about' className='text-white'>
              About
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
