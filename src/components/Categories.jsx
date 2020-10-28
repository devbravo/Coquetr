import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CategoryNavbar from './CategoryNavbar';
import config from '../config.json';

function Categories() {
  const initialValue =
    JSON.parse(localStorage.getItem('categories')) || [];

  const [categories, setCategories] = useState(initialValue);

  useEffect(() => {
    async function getCategories() {
      const { data } = await axios.get(config.categoryURL);
      // TODO sort data alphabetically
      localStorage.setItem('categories', JSON.stringify(data.drinks));
      setCategories(data.drinks);
    }
    getCategories();
  }, []);

  const handleClick = () => {
    console.log('click');
  };

  return (
    <CategoryNavbar
      categories={categories}
      onClick={() => handleClick()}
    />
  );
}

export default Categories;
