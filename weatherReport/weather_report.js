function showweatherDetails(event){
    event.preventDefault();
    const city = document.getElementById('city').value;
    const lat = document.getElementById("lat").value;
    const long = document.getElementById("long").value;
    const apiKey = '7bf07d77c8dec3b52064a5fbbc598fd6';
    const apiUrl1 = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    const apiUrl2 = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${apiKey}`;

    fetch(apiUrl1)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                  <p>Temperature: ${data.main.temp} &#8451;</p>
                                  <p>Weather: ${data.weather[0].description}</p>`;
        })
        .catch(error=>{
            console.error('Error fetching weather:', error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
        })
        
    fetch(apiUrl2)
        .then(response => response.json())
        .then(data => {
            const forecastInfo = document.getElementById('forecastInfo');
            const forecast = data.list[0];
            forecastInfo.innerHTML = `<h2>Weather Forecast</h2>
                          <p>Temperature: ${forecast.main.temp} &#8451;</p>
                          <p>Weather: ${forecast.weather[0].description}</p>`;
        })
        .catch(error=>{
            console.error('Error fetching weather:', error);
            const forecastInfo = document.getElementById('forecastInfo');
            forecastInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
        })
}
 document.getElementById('weatherForm').addEventListener('submit',showweatherDetails);
 document.getElementById("geoForm").addEventListener('submit',showweatherDetails);



