function searchWeather() {
    const cityInput = document.getElementById('city').value;
    const weatherAPI = `https://api.weatherapi.com/v1/current.json?key=e6853ad8e5df4c17a2d95902221212&q=${cityInput}`;

    fetch(weatherAPI)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok (${response.status})`);
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            const weatherResultElement = document.getElementById('weatherResult');
            weatherResultElement.innerHTML = '<p class="text-red-500">Error fetching weather data. Please try again.</p>';
        });
}

function displayWeather(weatherData) {
    const weatherResultElement = document.getElementById('weatherResult');

    weatherResultElement.innerHTML = `
        <h3>${weatherData.location.name}, ${weatherData.location.region}, ${weatherData.location.country}</h3>
        <div class="box">
            <img src="${weatherData.current.condition.icon}" alt="Weather Icon">
            <h1>${weatherData.current.temp_c} ℃</h1>
        </div>
        <p>Last Updated: ${weatherData.current.last_updated}</p>
        <p>Condition: ${weatherData.current.condition.text}</p>
    `;
}
