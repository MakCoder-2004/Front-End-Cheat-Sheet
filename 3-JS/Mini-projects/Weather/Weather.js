const apiKey = "abae3af30cddaabc1628234cc53e1dd6";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const SearchCity = document.querySelector("#cityInput");
const searchBtn = document.querySelector("button");
const weatherIcon = document.querySelector("#weatherIcon");

async function weather(city) {
    if (!city) {
        alert("Please enter a city name.");
        return;
    }

    const response = await fetch(`${apiURL}${city}&appid=${apiKey}`); // Fixed API URL

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        const data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = `${Math.round(data.main.temp)}°C`;
        document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`; // Fixed typo
        document.querySelector(".wind").innerHTML = `${data.wind.speed} km/hr`;

        if (data.weather[0].main === "Clouds") {
            weatherIcon.src = "images/clouds.png";
        } else if (data.weather[0].main === "Rain") {
            weatherIcon.src = "images/rain.png";
        } else if (data.weather[0].main === "Clear") {
            weatherIcon.src = "images/clear.png";
        } else if (data.weather[0].main === "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        } else if (data.weather[0].main === "Mist") {
            weatherIcon.src = "images/mist.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}

searchBtn.addEventListener("click", () => {
    const city = SearchCity.value;
    weather(city);
});

SearchCity.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && SearchCity.value.trim() !== "") {
        const city = SearchCity.value;
        weather(city);
    }
});