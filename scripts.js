function getWeather(){
    const apikey = "6488eb50a52f99b0c4030619826cd615";
    const city = document.getElementById("city").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=imperial&appid=${apikey}`

    fetch(url)
    .then(response => response.json())
    .then(data => {
        displayWeather(data);
    })
    .catch(error => {
        console.log(error)
        console.error('Error fetching weather data:', error);
        alert(`Error fetching weather data for "${city}". Please try again.`);
    });
}

function displayWeather(data){
    const{name} = data
    const{icon, description} = data.weather[0];
    const{temp, feels_like, temp_min, temp_max, humidity} = data.main
    const{speed} = data.wind;

document.querySelector('.container').classList.remove('loading')
document.getElementById('location').innerText = `Weather in ${name}`;
document.getElementById('temperature').innerText = `${temp}°F`;
document.getElementById('feels').innerText = `Feels like: ${feels_like}°F`;
document.getElementById('icon').src = `https://openweathermap.org/img/wn/${icon}.png`;
document.getElementById('description').innerText = description;
document.getElementById('high').innerText = `High: ${temp_max}°F`;
document.getElementById('low').innerText = `Low: ${temp_min}°F`;
document.getElementById('humidity').innerText = `Humidity: ${humidity}%`;
document.getElementById('wind').innerText = `Wind: ${speed}mph`;

let milliseconds = 300;
setTimeout(() =>{
    let weatherInfo = document.querySelector('.weatherInfo');
    weatherInfo.style.display = "auto"
    weatherInfo.style.transition = "opacity 2s"
    weatherInfo.style.opacity = "1"
}, milliseconds)
}