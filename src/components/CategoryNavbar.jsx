import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Cocktails from './Cocktails';
import { NavLink } from 'react-router-dom';

// props -> nav. link
// Renders the category navbar
// Each category renders as a navigational link and provides the url endpoint
const CategoryNavbar = ({ categories, onClick, selectCategory }) => {
  const renderCategories = categories => {
    const listCategories = categories.map(category => (
      <Nav key={category.strCategory} className='mr-auto' bg='dark'>
        <NavLink
          className='nav-item nav-link'
          to={`/categories/${category.strCategory}`}
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
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          {renderCategories(categories)}
        </Navbar.Collapse>
      </Navbar>
      {/*If 1 category selected render Cocktails component*/}
      {selectCategory.length > 1 && <Cocktails />}
    </>
  );
};

export default CategoryNavbar;
