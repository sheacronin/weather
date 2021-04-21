async function getWeather(location) {
    try {
        const response = await fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=558df500de211a9bd9d1847f6d74894c`,
            { mode: 'cors' }
        );
        // If 404 error, throw error.
        if (!response.ok) throw new Error('Network response was not ok');

        const weatherData = await response.json();
        return weatherData;
    } catch (error) {
        console.log(error);
    }
}

class Weather {
    constructor(location, country, temp, lowTemp, highTemp, desc, iconCode) {
        this.tempUnit = 'F';
        this.temp = {
            main: {
                f: Math.round(((temp - 273.15) * 9) / 5 + 32),
                c: Math.round(temp - 273.15),
            },
            low: {
                f: Math.round(((lowTemp - 273.15) * 9) / 5 + 32),
                c: Math.round(lowTemp - 273.15),
            },
            high: {
                f: Math.round(((highTemp - 273.15) * 9) / 5 + 32),
                c: Math.round(highTemp - 273.15),
            },
        };
        this.location = location;
        this.country = country;
        this.desc = desc;
        // Set the icon name based on the icon code provided by the API.
        this.iconName = ((code) => {
            console.log(code);
            if (code.match(/01[dn]/)) {
                return 'clear';
            } else if (code.match(/02[dn]/)) {
                return 'fewClouds';
            } else if (code.match(/0[34][dn]/)) {
                return 'clouds';
            } else if (code.match(/09|10[dn]/)) {
                return 'rain';
            } else if (code.match(/11[dn]/)) {
                return 'storm';
            } else if (code.match(/13[dn]/)) {
                return 'snow';
            } else if (code.match(/50[dn]/)) {
                return 'mist';
            }
        })(iconCode);
    }
    convertTemp(newUnit) {
        switch (this.tempUnit) {
            case 'F':
                this.temp.k = ((this.temp.k - 32) * 5) / 9;
                break;
            case 'C':
                this.temp.k = (this.temp.k * 9) / 5 + 32;
                break;
            default:
                console.log('Invalid temperature unit.');
        }
        this.tempUnit = newUnit;
        return this.temp.k;
    }
}

async function processWeatherData(location) {
    const data = await getWeather(location);
    console.log(data);
    const weather = new Weather(
        data.name,
        data.sys.country,
        data.main.temp,
        data.main['temp_min'],
        data.main['temp_max'],
        data.weather[0].description,
        data.weather[0].icon
    );
    console.log(weather);
    return weather;
}

export { processWeatherData };
