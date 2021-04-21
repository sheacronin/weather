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

function displayTemperature(tempType, temp, unit) {
    weatherInfo[tempType].querySelector('.degrees-num').textContent = temp;
    weatherInfo[tempType].querySelector('.degrees-unit').textContent =
        '°' + unit;
}

function updateWeatherInfo(weatherObj) {
    weatherInfo.location.textContent = weatherObj.location;
    weatherInfo.desc.textContent = weatherObj.desc;
    weatherInfo.icon.src = icons[weatherObj.iconName];
    displayTemperature('temp', weatherObj.temp.f, 'F');
    displayTemperature('highTemp', weatherObj.temp.high.f, 'F');
    displayTemperature('lowTemp', weatherObj.temp.low.f, 'F');
}

export { updateWeatherInfo };
