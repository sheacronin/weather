import './style.css';

async function getWeather(location) {
    try {
        const response = await fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=558df500de211a9bd9d1847f6d74894c`,
            { mode: 'cors' }
        );
        // If 404 error, throw error.
        if (!response.ok) throw new Error('Network response was not ok');
        console.log(response);

        const weatherData = await response.json();
        console.log(weatherData.weather[0]);
        return weatherData;
    } catch (error) {
        console.log(error);
    }
}

getWeather('London,uk');
