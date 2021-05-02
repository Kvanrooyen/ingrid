import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function NavBar() {
  return (
    <Navbar bg='light' expand='lg'>
      <Navbar.Brand href='#home'>Ingrid Telles de Abreu</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link href='/'>Library</Nav.Link>
          <Nav.Link href='/about'>About Me</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
