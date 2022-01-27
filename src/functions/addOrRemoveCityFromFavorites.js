/* utils */
import { favoriteCities } from '../utils/favoriteCities.js';
import { favoriteButton } from '../utils/DOMElements.js';

/* Functions */
import { setFavoriteButton } from './setFavoriteButton.js';
import { setFavoriteCities } from './setFavoriteCities.js';
import { removeFavoriteCities } from './removeFavoriteCities.js';

//Funcion para añadir o remover todas las ciudades de la seccion de favoritos:
const addOrRemoveCityFromFavorites = (selectedCity) => {
  //Alamcenamos, el elemento de favoritso:
  const isCityFavorite = favoriteButton.classList.contains('on');
  if (isCityFavorite) {//Si es true
    const cityIndex = favoriteCities.findIndex(//Si la ciudad pasada esta dentro del index de ciudades favoritas
      (city) => city.city === selectedCity.city
    );
    favoriteCities.splice(cityIndex, 1); //Eliminamos ese elemento...
  } else {
    favoriteCities.push(selectedCity); //Sino lo agregamos
  }
  //LLamamos la funcion para establecer o no el boton de favoritos
  setFavoriteButton(selectedCity);
  removeFavoriteCities();//Removemos las ciudades de favoritos..
  setFavoriteCities(favoriteCities);//Le pasamos el objeto con las ciudades favoritas
};

export { addOrRemoveCityFromFavorites };
