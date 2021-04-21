import Clouds from './img/Clouds.gif';
import Clear from './img/Clear.gif';

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

    weatherInfo.temp.displayTemperature(null, newUnit);
}

const icons = {
    Clouds: Clouds,
    Clear: Clear,
};

const weatherInfo = {
    location: document.querySelector('#location'),
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
    update(weather) {
        this.location.textContent = weather.location;
        this.desc.textContent = weather.desc;
        this.icon.src = icons[weather.iconName];
        this.temp.displayTemperature(weather.temp, 'F');
    },
};

export { weatherInfo };
