import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBar = () => {
  return (
    <Navbar bg='dark' variant='dark' expand='lg' sticky='top'>
      <Navbar.Brand href='/Home'>Coquetr</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto' bg='light'>
          <NavLink className='nav-item nav-link' to='/home'>
            <FontAwesomeIcon icon={faHome} />
          </NavLink>
          <NavLink className='nav-item nav-link' to='/categories'>
            Categories
          </NavLink>
          <NavLink className='nav-item nav-link' to='/login'>
            Login
          </NavLink>
          <NavLink className='nav-item nav-link' to='/register'>
            Register
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
