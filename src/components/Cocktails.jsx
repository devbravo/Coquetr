import React, { useState, useEffect, useContext } from 'react';
import CocktailCards from './CocktailCards';
import config from '../config.json';
import CategoryContext from './context/categoryContext';
import http from './services/httpService';
import Paginate from './common/pagination';
import { paginating } from './utils/paginate'; // pagination algorithm

// Cocktails component
// Handles state and events and passes them as components to CocktailCards and Paginate component
function Cocktails() {
  // Receives context from Categories component
  const currentCategory = useContext(CategoryContext);
  const [drinks, setDrinks] = useState([]);
  const [pageSize] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);

  // Async call -> Returns state
  useEffect(() => {
    const filterCategoryURL =
      config.drinkByCategoryURl + currentCategory;

    async function populateCocktails() {
      const { data } = await http.get(filterCategoryURL);

      setDrinks(data.drinks);
    }
    populateCocktails();
  }, [currentCategory]);

  // TODO
  const handleInfo = () => {
    console.log('Info');
  };

  // TODO
  const handleEdit = () => {
    console.log('Edit');
  };

  // toggles the like button
  const handleLike = drink => {
    const cocktails = [...drinks];
    const index = cocktails.indexOf(drink);
    cocktails[index] = { ...cocktails[index] };
    cocktails[index].liked = !cocktails[index].liked;
    setDrinks(cocktails);
  };

  // Handler function for page change
  const handlePageChange = page => {
    setCurrentPage(page);
  };

  // Passes 3 states to the pagination algorithm - paginating
  // Returning an array of beverages to pass to the CocktailCards component
  const beverages = paginating(drinks, currentPage, pageSize);

  return (
    <div>
      <CocktailCards
        drinks={beverages}
        onLike={drink => handleLike(drink)}
        onInfo={handleInfo}
        onEdit={handleEdit}
      />
      <Paginate
        itemsCount={drinks.length}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default Cocktails;
