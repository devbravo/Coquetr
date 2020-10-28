import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CategoryNavbar from './CategoryNavbar';

import config from '../config.json';

function Categories() {
  const initialValue =
    JSON.parse(localStorage.getItem('categories')) || [];

  const [categories, setCategories] = useState(initialValue);
  const [selectedCategory, setSelectedCategory] = useState([]);

  useEffect(() => {
    async function populateCategories() {
      const { data } = await axios.get(config.categoryURL);
      // TODO sort data alphabetically
      localStorage.setItem('categories', JSON.stringify(data.drinks));
      setCategories(data.drinks);
    }
    populateCategories();
  }, []);

  const handleClick = category => {
    const clickedCategory = categories.filter(c => c === category);
    const result = clickedCategory.map(c => c.strCategory);
    const stringResult = result[0];
    console.log(stringResult);
    setSelectedCategory(stringResult);
  };
  return (
    <>
      <CategoryNavbar
        categories={categories}
        endPoint={selectedCategory}
        onClick={category => handleClick(category)}
      />
    </>
  );
}

export default Categories;
