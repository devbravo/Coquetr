import React, { useState, useEffect } from 'react';
import CategoryNavbar from './CategoryNavbar';
import config from '../config.json';
import CategoryContext from './context/categoryContext';
import http from './services/httpService';

// Category component
// Passes props and context for CategoryNavbar and Cocktails component
function Categories() {
  const initialValue =
    JSON.parse(localStorage.getItem('categories')) || [];

  const [categories, setCategories] = useState(initialValue);
  const [selectCategory, setSelectCategory] = useState([]);

  // Asynchronous call -> sets the state
  // Stores data in local storage
  useEffect(() => {
    async function populateCategories() {
      const { data } = await http.get(config.categoryURL);
      // TODO sort data alphabetically
      localStorage.setItem('categories', JSON.stringify(data.drinks));
      setCategories(data.drinks);
    }
    populateCategories();
  }, []);

  // Category -> sets the state
  // Handles category changes and updates the state
  const handleCategoryChange = category => {
    const clickedCategory = categories
      .filter(c => c === category)
      .map(c => c.strCategory);
    const stringResult = clickedCategory[0];
    setSelectCategory(stringResult);
  };

  // Passes data as props to CategoryNavbar component
  // and provides context to Cocktail component
  return (
    <CategoryContext.Provider value={selectCategory}>
      <div>
        <CategoryNavbar
          categories={categories}
          selectCategory={selectCategory}
          onClick={category => handleCategoryChange(category)}
        />
      </div>
    </CategoryContext.Provider>
  );
}

export default Categories;
