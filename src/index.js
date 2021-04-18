import './style.css';

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

const weatherFactory = (temp, lowTemp, highTemp, desc) => {
    return { temp, lowTemp, highTemp, desc };
};

async function processWeatherData(location) {
    const data = await getWeather(location);
    const weather = weatherFactory(
        data.main.temp,
        data.main['temp_min'],
        data.main['temp_max'],
        data.weather[0].description
    );
    console.log(weather);
    return weather;
}

processWeatherData('London,uk');
