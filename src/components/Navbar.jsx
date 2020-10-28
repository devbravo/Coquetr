import React from 'react';
//import { Link, NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavBar = () => {
  return (
    <Navbar bg='dark' variant='dark' expand='lg' sticky='top'>
      <Navbar.Brand href='#home'>Coquetr</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto' bg='light'>
          <Nav.Link href='/'>Home</Nav.Link>
          <Nav.Link href='/Categories'>Categories</Nav.Link>
          <Nav.Link href='/Login'>Login</Nav.Link>
          <Nav.Link href='/Register'>Register</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
