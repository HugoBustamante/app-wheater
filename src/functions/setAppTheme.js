import { body } from '../utils/DOMElements.js';
//Funcion para establecer el tema de la aplicacion web:

//Creamos una función que recibe toda la información de la URL que trae la latitud y longitud en la API
const setAppTheme = (cityWeather) => {
  const testDay = /d/;
  const testNight = /n/;

//Utilizamos el metodo test() que ejecuta la búsqueda de una ocurrencia entre una expresión regular y una cadena especificada.
//Retorna true si existe una coincidencia entre la expresión regular y la cadena especificada; de lo contrario retorna false.
if (//Si el icono actual tiene una ocurrencia n en su valor y body tiene la clase "day":
    testNight.test(cityWeather.current.weather[0].icon) &&
    body.classList.contains('day')
  ) {
    body.classList.remove('day');//Remuevo la clase day del body
    body.classList.add('night');//Ponemos está nueva clase
  } else if (//Sino, si el icono actual tiene una ocurrencia d en su valor y body tiene las clase "night"
    testDay.test(cityWeather.current.weather[0].icon) &&
    body.classList.contains('night')
  ) {
    body.classList.remove('night');//Remuevo la clase night del body
    body.classList.add('day');//Y ponemos day
  }
};

//Nota: la propiedad icon en el elemento weather de la API meteorologica... despues seguimos esperemos haber

export { setAppTheme };
