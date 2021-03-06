/* All DOM Elements selection */

/* globals */
const body = document.querySelector('body');

/* Search-bar */
const searchBar = document.querySelector('form');
const searchInput = document.querySelector('input');
const searchResults = document.querySelector('.search-results');

/* Main data */
const currentWeatherIcon = document.querySelector('.main-data__icon');//Icono grande del clima, en el main principal.
const currentCityLabel = document.querySelector('.main-data__city');
const currentTempLabel = document.querySelector('.main-data__temp');
const currentFeelTempLabel = document.querySelector('.main-data__feelslike');
const favoriteButton = document.querySelector('.main-data__heart');

/* Hourly values */
const currentHourlyValues = document.querySelector('.hourly-data__content');

/* Indicators value */
const currentSunriseValue = document.getElementById('sunrise');
const currentUvValue = document.getElementById('uv');
const currentWindValue = document.getElementById('wind');
const currentSunsetValue = document.getElementById('sunset');
const currentPressureValue = document.getElementById('pressure');
const currentHumidityValue = document.getElementById('humidity');

/* Daily values */
const currentNextSevenContainer = document.querySelector('.day__container');

/* Cards */
const favoritesContainer = document.querySelector('.favorites__container');

export {
  body,
  searchBar,
  searchInput,
  searchResults,
  currentWeatherIcon,
  currentCityLabel,
  currentTempLabel,
  currentFeelTempLabel,
  favoriteButton,
  currentHourlyValues,
  currentSunriseValue,
  currentUvValue,
  currentWindValue,
  currentSunsetValue,
  currentPressureValue,
  currentHumidityValue,
  currentNextSevenContainer,
  favoritesContainer,
};
