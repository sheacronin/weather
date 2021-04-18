const weatherInfo = {
    location: document.querySelector('#location'),
    icon: document.querySelector('#weather-icon'),
    temp: document.querySelector('#temp'),
    highTemp: document.querySelector('#high-temp'),
    lowTemp: document.querySelector('#low-temp'),
};

function updateWeatherInfo(weatherObj) {
    weatherInfo.location.textContent = weatherObj.location;
    weatherInfo.icon.src = '#';
    weatherInfo.temp.textContent = weatherObj.temp;
    weatherInfo.highTemp.textContent = weatherObj.highTemp;
    weatherInfo.lowTemp.textContent = weatherObj.lowTemp;
}

export { updateWeatherInfo };
