/* Utils */
import { coordinatesURL } from '../utils/API.js';
import { favoriteCities } from '../utils/favoriteCities.js';

/* Functions */
import { setAppTheme } from './setAppTheme.js';
import { setCurrentCityHourlyWeather } from './setCurrentCityHourlyWeather.js';
import { setCurrentCityIndicators } from './setCurrentCityIndicators.js';
import { setCurrentCityNextSevenDaysWeather } from './setCurrentCityNextSevenDaysWeather.js';
import { setCurrentCityWeather } from './setCurrentCityWeather.js';
import { setFavoriteButton } from './setFavoriteButton.js';
import { setFavoriteCities } from './setFavoriteCities.js';

const fetchInitialCityWeather = (city) => {
  window
    .fetch(coordinatesURL(city.lat, city.lon))//Hacemos la peticion fetch a la URL de la API que viene con latitud y longitud
    .then((response) => response.json())
    .then((cityWeather) => {//Acá ya tenemos todo los datos...
      setAppTheme(cityWeather);//Establecemos el tema de la aplicacion dependiendo del dia/noche actual de cada ciudad
      setCurrentCityWeather(cityWeather, city.city, city.country);//Establecemos clima actual de la ciudad con su codigo pais
      setFavoriteButton(city);//Establecemos el boton de favoritos
      setCurrentCityHourlyWeather(cityWeather);
      setCurrentCityIndicators(cityWeather);
      setCurrentCityNextSevenDaysWeather(cityWeather);
      setFavoriteCities(favoriteCities);
    });
};

export { fetchInitialCityWeather };
