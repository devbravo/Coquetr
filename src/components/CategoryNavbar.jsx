import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Cocktails from './Cocktails';
import { NavLink } from 'react-router-dom';

const CategoryNavbar = ({ categories, onClick, value }) => {
  const renderCategories = categories => {
    const listCategories = categories.map(category => (
      <Nav key={category.strCategory} className='mr-auto' bg='dark'>
        <NavLink
          className='nav-item nav-link'
          to={`/categories/${decodeURIComponent(
            category.strCategory
          )}`}
          onClick={() => onClick(category)}>
          {category.strCategory}
        </NavLink>
      </Nav>
    ));

    return listCategories;
  };
  return (
    <>
      <Navbar
        bg='light'
        className='fixed-top-2'
        variant='light'
        expand='lg'>
        <Navbar.Brand href='/categories'>Categories</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          {renderCategories(categories)}
        </Navbar.Collapse>
      </Navbar>
      {value.length > 1 && <Cocktails />}
    </>
  );
};

export default CategoryNavbar;
