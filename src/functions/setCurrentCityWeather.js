/* DOM Elements */
import {
  currentCityLabel,
  currentWeatherIcon,
  currentTempLabel,
  currentFeelTempLabel,
} from '../utils/DOMElements.js';

/* Functions */
import { weatherIconsTranslation } from '../utils/weatherIconsTranslation.js';

//Creamos una funcion para establecer en los nodos correspondientes el clima actual de la ciudad:
const setCurrentCityWeather = (//Recibimos los datos, la ciudad y el codigo de su pais actual
  cityWeather,
  currentCityName,
  currentCityCountry
) => {
  currentWeatherIcon.setAttribute(//Le establecemos una propiedad y le asignamos un valor al icono del clima del main
    'data-icon',
    weatherIconsTranslation[`I${cityWeather.current.weather[0].icon}`]//Traemos el valor del icono actual y ayudamos a establecerlo con la funcion weatherIconsTranslation
  );
  currentCityLabel.textContent = `${currentCityName}, ${currentCityCountry}`;//Asignamos el nombre y el codigo de pais actual
  currentTempLabel.textContent = `${Math.round(cityWeather.current.temp)}°`;//Asignamos la temperatura actual, redondeado.
  currentFeelTempLabel.textContent = `Feels like ${Math.round(//Asignamos como se siente la temperatura actual
    cityWeather.current.feels_like
  )}°`;
};

export { setCurrentCityWeather };
