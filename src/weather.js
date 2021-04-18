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

const weatherFactory = (location, temp, lowTemp, highTemp, desc) => {
    return { location, temp, lowTemp, highTemp, desc };
};

async function processWeatherData(location) {
    const data = await getWeather(location);
    console.log(data);
    const weather = weatherFactory(
        data.name,
        data.main.temp,
        data.main['temp_min'],
        data.main['temp_max'],
        data.weather[0].description
    );
    console.log(weather);
    return weather;
}

export { processWeatherData };
