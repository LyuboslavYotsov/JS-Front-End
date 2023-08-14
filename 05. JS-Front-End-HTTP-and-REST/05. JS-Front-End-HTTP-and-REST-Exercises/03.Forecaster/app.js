function attachEvents() {
  const getWeatherButton = document.querySelector("#submit");
  const currentLocationDiv = document.querySelector("#current");
  const upcommingLocationDiv = document.querySelector("#upcoming");

  getWeatherButton.addEventListener("click", getLocation);

  async function getLocation() {
    const locationInput = document.querySelector("#location").value;
    try {
      //GETTING LOCATION
      const response = await fetch(
        "http://localhost:3030/jsonstore/forecaster/locations"
      );

      const locationsData = await response.json();
      let currentLocationCode = "";

      locationsData.forEach((location) => {
        if (location.name === locationInput) {
          currentLocationCode = location.code;
        }
      });

      if (currentLocationCode === "") {
        throw new Error("Invalid location");
      }
      //GETTING LOCATION CURRENT
      const currentWeatherResponse = await fetch(
        `http://localhost:3030/jsonstore/forecaster/today/${currentLocationCode}`
      );
      const currentWeatherData = await currentWeatherResponse.json();

      //GETTING LOCATION UPCOMING
      const upcommingWeatherResponse = await fetch(
        `http://localhost:3030/jsonstore/forecaster/upcoming/${currentLocationCode}`
      );
      const upcommingWeatherData = await upcommingWeatherResponse.json();

      //SETTING CURRENT LOCATION HTML
      const currentDataHTML = `
      <div class="forecasts">
        <span class="condition symbol">${getConditionIcon(
          currentWeatherData.forecast.condition
        )}</span>
        <span class="condition">
            <span class="forecast-data">${currentWeatherData.name}</span>
            <span class="forecast-data">${currentWeatherData.forecast.low}&#176/${currentWeatherData.forecast.high}&#176</span>
            <span class="forecast-data">${currentWeatherData.forecast.condition}</span>
        </span>
      </div>
      `;

      currentLocationDiv.innerHTML += currentDataHTML;
      document.querySelector("#forecast").style.display = "block";

      //SETTING UPCOMING LOCATION HTML
      const daysInfo = upcommingWeatherData.forecast;

      let dayHTML = `<div class="forecast-info">`;

      daysInfo.forEach((day) => {
        dayHTML += `
          <span class="upcoming">
            <span class="symbol">${getConditionIcon(day.condition)}</span>
            <span class="forecast-data">${day.low}&#176/${day.high}&#176</span>
            <span class="forecast-data">${day.condition}</span>
          </span>
        `;
      });

      dayHTML += "</div>";
      upcommingLocationDiv.innerHTML += dayHTML;
    } catch (error) {
      console.log(error.message);
    }
  }

  function getConditionIcon(condition) {
    if (condition === "Sunny") {
      return "&#x2600";
    } else if (condition === "Partly sunny") {
      return "&#x26C5";
    } else if (condition === "Overcast") {
      return "&#x2601";
    } else if (condition === "Rain") {
      return "&#x2614";
    }
  }
}

attachEvents();
