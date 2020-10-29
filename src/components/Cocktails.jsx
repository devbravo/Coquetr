import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import CocktailCards from './CocktailCards';
import config from '../config.json';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
// import ButtonGroup from 'react-bootstrap/ButtonGroup';
//import getDrinksByCategory from './services/httpService';
import CategoryContext from './context/categoryContext';

function Cocktails() {
  const currentCategory = useContext(CategoryContext);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    const filterCategoryURL =
      config.drinkByCategoryURl + currentCategory;

    async function populateCocktails() {
      const { data } = await axios.get(filterCategoryURL);

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
    <CocktailCards
      drinks={drinks}
      onLike={drink => handleLike(drink)}
      onInfo={handleInfo}
      onEdit={handleEdit}
      category={currentCategory}
    />
  );
}

export default Cocktails;
