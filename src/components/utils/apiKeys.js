const renameApiKeys = drinksObj => {
  const listDrinks = drinksObj.map(drink => {
    return {
      name: drink.strDrink,
      image: drink.strDrinkThumb,
      id: drink.idDrink,
    };
  });
  return listDrinks;
  //setDrinks(listDrinks);
};

export default renameApiKeys;
