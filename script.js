const apiKey = "81f9a02fbe53c6d345ea235de6f88423";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector("#input");
const searchBtn = document.querySelector("#button");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data = await response.json();
  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML =
    Math.round(data.main.temp) + " °C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

  if (data.weather[0].main == "clouds") {
    document.querySelector(".weather-icon").src = "images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    document.querySelector(".weather-icon").src = "images/clear.png";
  } else if (data.weather[0].main == "Drizzle") {
    document.querySelector(".weather-icon").src = "images/drizzle.png";
  } else if (data.weather[0].main == "Humidity") {
    document.querySelector(".weather-icon").src = "images/humidity.png";
  } else if (data.weather[0].main == "Mist") {
    document.querySelector(".weather-icon").src = "images/mist.png";
  } else if (data.weather[0].main == "Rain") {
    document.querySelector(".weather-icon").src = "images/rain.png";
  } else if (data.weather[0].main == "Snow") {
    document.querySelector(".weather-icon").src = "images/snow.png";
  } else if (data.weather[0].main == "Wind") {
    document.querySelector(".weather-icon").src = "images/wind.png";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
