import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CocktailCards from './CocktailCards';
import config from '../config.json';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
// import ButtonGroup from 'react-bootstrap/ButtonGroup';
//import getDrinksByCategory from './services/httpService';

function Cocktails({ selected }) {
  //console.log(endPoint);

  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    const filterCategoryURL = config.drinkByCategoryURl + selected;

    async function populateCocktails() {
      const { data } = await axios.get(filterCategoryURL);

      setDrinks(data.drinks);
    }
    populateCocktails();
  }, [selected]);

  // TODO
  const handleInfo = () => {
    console.log('Info');
  };

  // TODO
  const handleEdit = () => {
    console.log('Edit');
  };

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
    />
  );
}

export default Cocktails;
