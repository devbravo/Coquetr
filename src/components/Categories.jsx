import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CategoryNavbar from './CategoryNavbar';
import config from '../config.json';
import CategoryContext from './context/categoryContext';

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
    const clickedCategory = categories
      .filter(c => c === category)
      .map(c => c.strCategory);
    const stringResult = clickedCategory[0];
    setSelectedCategory(stringResult);
  };

  return (
    <CategoryContext.Provider value={selectedCategory}>
      <div>
        <CategoryNavbar
          categories={categories}
          value={selectedCategory}
          onClick={category => handleClick(category)}
        />
      </div>
    </CategoryContext.Provider>
  );
}

export default Categories;
