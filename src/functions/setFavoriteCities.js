/* utils */
import { cityURL } from '../utils/API.js';
import { favoritesContainer } from '../utils/DOMElements.js';
import { weatherIconsTranslation } from '../utils/weatherIconsTranslation.js';

//Fucion para establecer las ciudades favoritas:
const setFavoriteCities = (cities) => {//Le pasamos el objeto con el listado de ciudades favoritas
  let cityIndex = 0;
  cities.forEach((city) => {
    /* Create DOM elements */
    const favoritesCard = document.createElement('div');
    const favoritesCardMainData = document.createElement('div');
    const favoritesCardMainDataValues = document.createElement('div');
    const favoriteCityTemp = document.createElement('p');
    const favoriteCityLocation = document.createElement('p');
    const favoriteCityName = document.createElement('span');
    const favoriteCityCountry = document.createElement('span');
    const favoriteCityWeather = document.createElement('i');
    const favoritesCardOtherData = document.createElement('div');
    const favoritesCardHumidityForecast = document.createElement('div');
    const favoritesCardWindForecast = document.createElement('div');
    const dropletIcon = document.createElement('i');
    const favoriteCityHumidity = document.createElement('p');
    const windIcon = document.createElement('i');
    const favoriteCityWind = document.createElement('p');

    /* Add Classes */
    favoritesCard.classList.add('favorites__card');//Contenedor para cada tarjeta dentro de la sección de favoritos
    favoritesCardMainData.classList.add('favorites__card--main-data');//Contenedor que contiene la información de las tarjetas de ciudades favoritas de la parte de arriba.
    favoritesCardMainDataValues.classList.add(
      'favorites__card--main-data-values');//Contenedor para la temperatura y localización de la ciudad en la seccion de favoritos
    favoriteCityTemp.classList.add('temp');//Este es el tag para la temperatura
    favoriteCityLocation.classList.add('location');//Este es el tag para la localización
    favoriteCityName.classList.add('city');//Este es el tag que está dentro de tag de location..
    favoriteCityCountry.classList.add('country');//Este es el otro tag que está dentro del tag de location
    favoriteCityWeather.classList.add('icon');//Este es el icono que está dentro del contenedor que contiene toda la info
    favoritesCardOtherData.classList.add('favorites__card--other-data');//Contenedor que contiene la información de las tarjetas de ciudades favoritas de la parte de abajo.
    dropletIcon.classList.add('icon-droplet');// Es el icono de la primer seccion de la parte de abajo
    favoriteCityHumidity.classList.add('humidity');//Es el tag p que contiene el porcentage de humedad de la primer seccion de la parte de abajo
    windIcon.classList.add('icon');//Es el icono de la segunda seccion de la parte de abajo
    favoriteCityWind.classList.add('wind');//El el tag p de la seccion 2 de la parte de abajo.

    /* Añadimos los elementos a su contenedor correspondiente:*/
    favoritesCardMainDataValues.append(favoriteCityTemp, favoriteCityLocation);
    favoritesCardMainData.append(//Añadimos al contenedor principal de las tarjetas la informacion con el icono...
      favoritesCardMainDataValues,
      favoriteCityWeather
    );
    //Añadimos al div sin clase el icono y la humedad de la seccion de la parte de abajo de la tarjeta:
    favoritesCardHumidityForecast.append(dropletIcon, favoriteCityHumidity);
    //Añadimos al otro div sin clase el otro icono y la velocidad del viendo de la misma seccion de la parte de abajo:
    favoritesCardWindForecast.append(windIcon, favoriteCityWind);
    //Añadimos toda la seccion de la aparte de abajo de la tarjeta al contenedor de esa sección:
    favoritesCardOtherData.append(
      favoritesCardHumidityForecast,
      favoritesCardWindForecast
    );

    //Añadimos toda la informacion al contenedor principal de cada tarjeta:
    favoritesCard.append(favoritesCardMainData, favoritesCardOtherData);

    //Añadimos todas las tarjetas favoritas al contenedor principal de estás:
    favoritesContainer.appendChild(favoritesCard);

    /* Values */
    //Establecemos una atributo para ese nodo y le damos un valor:
    favoritesCard.setAttribute('city-index', cityIndex);//SetAttribute recibe primero el nombre de la propiedad a setear y segundo el valor de dicha propiedad
    cityIndex++;
    favoriteCityName.textContent = city.city;//Establecemos el nombre de la ciudad
    favoriteCityCountry.textContent = city.country;//Establecemos la clave del pais

    //Agregamos el nombre de la ciudad y el codigo del pais a su contenedor padre:
    favoriteCityLocation.append(favoriteCityName, favoriteCityCountry);
    windIcon.setAttribute('data-icon', 'F');//Establecemos un atributo y su valor en este tag icono

    //Peticiones a la API:
    window
      .fetch(cityURL(city.city, city.country))//Hacemos una petición fetch() hacia la ventanada del DOM (objeto window)
      .then((response) => response.json())
      .then((cityWeather) => {
        favoriteCityTemp.textContent = `${Math.round(cityWeather.main.temp)}°`;//Redondeamos la temperatura y almacenamos
        favoriteCityHumidity.textContent = `${cityWeather.main.humidity}%`;//solicitamos la humedad y almacenamos
        favoriteCityWind.textContent = `${cityWeather.wind.speed} km/h`;//solicitamos la velocidad del viento y almacenamos
        favoriteCityWeather.setAttribute(//Establecemos una propiedad y un valor para esté icono.
          'data-icon',
          weatherIconsTranslation[`I${cityWeather.weather[0].icon}`]//traemos los iconos de la API y establecemos como valor de la propiedad
        );
      });
  });
};

export { setFavoriteCities };
