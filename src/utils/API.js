//En este archivo establecemos las URL a la API
const APIKeys = '9832905a1bed9547d41f2cdaed555ef3';
const coordinatesAPI = 'https://api.openweathermap.org/data/2.5/onecall?';
const cityAPI = 'https://api.openweathermap.org/data/2.5/weather?q=';

//Funcion que me trae la URL de la Api con las latitudes y longitudes:
const coordinatesURL = (latitud, longitud) => {
  return `${coordinatesAPI}lat=${latitud}&lon=${longitud}&exclude=minutely&units=metric&appid=${APIKeys}`;
};

//Funcion que me trae la URL de la Api con el nombre de las ciudades y su codigo de pais:
const cityURL = (city, country) => {
  return `${cityAPI}${city},${country}&units=metric&appid=${APIKeys}`;
};

export { coordinatesURL, cityURL };
