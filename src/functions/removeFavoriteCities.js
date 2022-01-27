/* DOM Elements */
import { favoritesContainer } from '../utils/DOMElements.js';

//Remover el contenedor en favoritos de la ciudad correspondiente
const removeFavoriteCities = () => {
  while (favoritesContainer.childElementCount > 0) {//devuelve un número que representa la cantidad de elementos hijo que penden del elemento padre (ParentNode).
    favoritesContainer.removeChild(favoritesContainer.lastChild);//Removemos el ultimo elemento de ese contenedor
  }
};

export { removeFavoriteCities };
