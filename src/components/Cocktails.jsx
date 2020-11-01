import React, { useState, useEffect, useContext } from 'react';
import CocktailCards from './CocktailCards';
import config from '../config.json';
import CategoryContext from './context/categoryContext';
import http from './services/httpService';
import Paginate from './common/pagination';

function Cocktails() {
  const currentCategory = useContext(CategoryContext);
  const [drinks, setDrinks] = useState([]);
  const [pageSize, setPageSize] = useState(20);

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

  const handlePageChange = page => {
    console.log(page);
  };

  // const renameApiKeys = drinksObj => {
  //   const listDrinks = drinksObj.map(drink => {
  //     return {
  //       name: drink.strDrink,
  //       image: drink.strDrinkThumb,
  //       id: drink.idDrink,
  //     };
  //   });

  //   setDrinks(listDrinks);
  // };

  return (
    <div>
      <CocktailCards
        drinks={drinks}
        onLike={drink => handleLike(drink)}
        onInfo={handleInfo}
        onEdit={handleEdit}
        category={currentCategory}
      />
      <Paginate
        itemsCount={drinks.length}
        pageSize={pageSize}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default Cocktails;
