import './style.css';
import { weatherInfo } from './dom-weather';
import { processWeatherData } from './weather';

processWeatherData('London,uk').then((weather) => {
    weatherInfo.update(weather);
});

const searchInput = document.querySelector('input');
const searchBtn = document.querySelector('#search-btn');

searchBtn.addEventListener('click', (e) => {
    processWeatherData(searchInput.value).then((weather) => {
        weatherInfo.update(weather);
    });
    searchInput.value = '';
    e.preventDefault();
});
