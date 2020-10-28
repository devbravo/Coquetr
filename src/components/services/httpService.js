import axios from 'axios';
import config from '../../config.json';
import renameApiKeys from '../utils/apiKeys';

const filterCategoryURL =
  config.drinkByCategoryURl + 'Ordinary_Drink';

async function getDrinksByCategory() {
  const { data } = await axios.get(filterCategoryURL);

  renameApiKeys(data.drinks);
}

export default getDrinksByCategory;
