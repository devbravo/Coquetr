import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Cocktails from './Cocktails';

const CategoryNavbar = ({ categories, onClick, endPoint }) => {
  const renderCategories = categories => {
    const listCategories = categories.map(category => (
      <Nav key={category.strCategory} className='mr-auto' bg='dark'>
        <Nav.Link onClick={() => onClick(category)}>
          {category.strCategory}
        </Nav.Link>
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
        <Navbar.Brand href='/Categories'>Categories</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          {renderCategories(categories)}
        </Navbar.Collapse>
      </Navbar>
      {endPoint.length > 1 && <Cocktails selected={endPoint} />}
    </>
  );
};

export default CategoryNavbar;
