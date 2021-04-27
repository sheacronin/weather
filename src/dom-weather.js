import clear from './img/clear.gif';
import moon from './img/moon.gif';
import fewClouds from './img/few-clouds.gif';
import moonClouds from './img/moon-clouds.gif';
import clouds from './img/clouds.gif';
import rain from './img/rain.gif';
import storm from './img/storm.gif';
import snow from './img/snow.gif';
import mist from './img/mist.gif';

const icons = {
    clear,
    moon,
    fewClouds,
    moonClouds,
    clouds,
    rain,
    storm,
    snow,
    mist,
};

const tempUnits = {
    button: document.querySelector('#unit-toggle'),
    activeUnit: 'F',
    animateBtn() {
        this._toggleActiveUnit();

        this.button.className = '';
        const newCls = this.activeUnit === 'F' ? 'fahrenheit' : 'celsius';
        this.button.classList.add(newCls);

        this.button.textContent = this.activeUnit;

        // Display temperature in new units.
        weatherInfo.temp.display();
    },
    _toggleActiveUnit() {
        this.activeUnit = this.activeUnit === 'F' ? 'C' : 'F';
    },
};

tempUnits.button.addEventListener('click', () => tempUnits.animateBtn());

const weatherInfo = {
    location: document.querySelector('#location'),
    country: document.querySelector('#country'),
    desc: document.querySelector('#desc'),
    icon: document.querySelector('#weather-icon'),
    temp: {
        main: document.querySelector('#temp'),
        high: document.querySelector('#high-temp'),
        low: document.querySelector('#low-temp'),
        display() {
            for (const tempType in this) {
                // Only include element properties.
                if (tempType === 'display' || tempType === 'data') {
                    continue;
                }
                this[tempType].querySelector(
                    '.degrees-num'
                ).textContent = this.data[tempType][
                    tempUnits.activeUnit.toLowerCase()
                ];
                this[tempType].querySelector('.degrees-unit').textContent =
                    '°' + tempUnits.activeUnit;
            }
        },
    },
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
        // Store temperature data inside temp object.
        this.temp.data = weather.temp;
        this.temp.display();
    },
};

const errorLog = {
    el: document.querySelector('#errors'),
    display(input) {
        this.el.classList.add('enter-error');
        this.el.textContent = `Could not find the location "${input}"`;
    },
    clear() {
        this.el.textContent = '';
        this.el.classList.remove('enter-error');
    },
};

export { weatherInfo, errorLog };
