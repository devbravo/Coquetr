import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavBar = () => {
  return (
    <Navbar bg='dark' variant='dark' expand='lg' sticky='top'>
      <Navbar.Brand href='#home'>Coquetr</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto' bg='light'>
          <NavLink className='nav-item nav-link' to='/Home'>
            Home
          </NavLink>
          <NavLink className='nav-item nav-link' to='/Categories'>
            Categories
          </NavLink>
          <NavLink className='nav-item nav-link' to='/Login'>
            Login
          </NavLink>
          <NavLink className='nav-item nav-link' to='/Register'>
            Register
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
