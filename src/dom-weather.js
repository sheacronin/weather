import Clouds from './img/Clouds.gif';
import Clear from './img/Clear.gif';

const icons = {
    Clouds: Clouds,
    Clear: Clear,
};

const weatherInfo = {
    location: document.querySelector('#location'),
    desc: document.querySelector('#desc'),
    icon: document.querySelector('#weather-icon'),
    temp: document.querySelector('#temp'),
    highTemp: document.querySelector('#high-temp'),
    lowTemp: document.querySelector('#low-temp'),
};

function updateWeatherInfo(weatherObj) {
    weatherInfo.location.textContent = weatherObj.location;
    weatherInfo.desc.textContent = weatherObj.desc;
    weatherInfo.icon.src = icons[weatherObj.iconName];
    weatherInfo.temp.textContent = weatherObj.temp.f;
    weatherInfo.highTemp.textContent = weatherObj.temp.high.f;
    weatherInfo.lowTemp.textContent = weatherObj.temp.low.f;
}

export { updateWeatherInfo };
