/* Utils */
import { favoriteButton } from '../utils/DOMElements.js';
import { favoriteCities } from '../utils/favoriteCities.js';

//Establecemos el boton de favoritos: dependiendo de si está o no está la ciudad entre los favoritos
const setFavoriteButton = (city) => {
  if (favoriteButton.classList.contains('on')) {//Si es true..
    favoriteButton.classList.remove('on');//Removemos el on
    favoriteButton.classList.add('off'); //Añadimos una clase off
  }
  favoriteCities.forEach((favoriteCity) => {//Porcada objeto de favoriteCities
    if (favoriteCity.city === city.city) {//Si la cuidad dentro de cada objeto es igual a la ciudad ingresada
      favoriteButton.classList.remove('off');
      favoriteButton.classList.add('on');
    }
  });
};

export { setFavoriteButton };
