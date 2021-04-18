import './style.css';
import { updateWeatherInfo } from './dom-weather';
import { processWeatherData } from './weather';

processWeatherData('London,uk').then((weather) => {
    updateWeatherInfo(weather);
});

const searchInput = document.querySelector('input');
const searchBtn = document.querySelector('button');

searchBtn.addEventListener('click', () => {
    processWeatherData(searchInput.value).then((weather) => {
        updateWeatherInfo(weather);
    });
});
