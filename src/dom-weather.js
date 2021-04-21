import clear from './img/clear.gif';
import fewClouds from './img/few-clouds.gif';
import clouds from './img/clouds.gif';
import rain from './img/rain.gif';
import storm from './img/storm.gif';
import snow from './img/snow.gif';
import mist from './img/mist.gif';

const icons = {
    clear,
    fewClouds,
    clouds,
    rain,
    storm,
    snow,
    mist,
};

const unitToggleBtn = document.querySelector('#unit-toggle');
unitToggleBtn.addEventListener('click', animateUnitToggleBtn);

function animateUnitToggleBtn() {
    console.log('moving button...');
    // Determine new class.
    const newCls = unitToggleBtn.classList.contains('fahrenheit')
        ? 'celsius'
        : 'fahrenheit';
    // Clear current class.
    unitToggleBtn.className = '';
    unitToggleBtn.classList.add(newCls);

    const newUnit = newCls === 'fahrenheit' ? 'F' : 'C';
    // Change text content for new unit.
    unitToggleBtn.textContent = newUnit;

    weatherInfo.temp.displayTemperature(weatherInfo.data.temp, newUnit);
}

const weatherInfo = {
    location: document.querySelector('#location'),
    country: document.querySelector('#country'),
    desc: document.querySelector('#desc'),
    icon: document.querySelector('#weather-icon'),
    temp: {
        main: document.querySelector('#temp'),
        high: document.querySelector('#high-temp'),
        low: document.querySelector('#low-temp'),

        displayTemperature(temp, unit) {
            for (const tempType in this) {
                // Don't include methods.
                if (typeof this[tempType] == 'function') {
                    continue;
                }
                this[tempType].querySelector('.degrees-num').textContent =
                    temp[tempType][unit.toLowerCase()];
                this[tempType].querySelector('.degrees-unit').textContent =
                    '°' + unit;
            }
        },
    },
    data: undefined,
    update(weather) {
        this.location.textContent = weather.location;
        // Add country flag emoji and acronym.
        this.country.textContent =
            weather.country.replace(/./g, (char) =>
                String.fromCodePoint(char.charCodeAt(0) + 127397)
            ) +
            ' ' +
            weather.country;
        this.desc.textContent = weather.desc;
        this.icon.src = icons[weather.iconName];
        this.temp.displayTemperature(weather.temp, 'F');
        this.data = weather;
    },
};

export { weatherInfo };
