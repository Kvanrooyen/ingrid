import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Navbar bg='light' expand='lg'>
      <Navbar.Brand>Ingrid Telles de Abreu</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link>
            <Link to='/'>Library</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/about'>About</Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
