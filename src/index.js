function showTime(city, timezone) {
  let cityElement = document.querySelector(city);
  let cityDateElement = cityElement.querySelector(".city-date");
  let cityTimeElement = cityElement.querySelector(".city-time");
  let cityTime = moment().tz(timezone);

  cityDateElement.innerHTML = cityTime.format("MMMM DD, YYYY");
  cityTimeElement.innerHTML = cityTime.format("HH:mm:ss");
}

setInterval(function () {
  showTime("#newyork", "America/New_York");
  showTime("#berlin", "Europe/Berlin");
  showTime("#tokyo", "Asia/Tokyo");
}, 1000);

function inicialTime() {
  let currentCityElement = document.querySelector("#currentCity");
  let currentCityTime = moment().tz("Europe/Lisbon");
  currentCityElement.innerHTML = `
      <div class="currtent-city">
      The time in <span id="city">Lisbon</span> now:</div>
      <div class="current-time">
      ${currentCityTime.format("HH:mm:ss")}</div>
      <div class="current-date">${currentCityTime.format(
        "dddd, MMMM DD, YYYY"
      )}</div>`;

  let citiesSelect = document.querySelector("#optionCity");
  citiesSelect.addEventListener("change", updateCity);
}

function updateCity(event) {
  let optionCityTimeZone = event.target.value;
  if (event.target.value.length > 0) {
    let optionCityTime = moment().tz(optionCityTimeZone);
    let optionCityName = optionCityTimeZone.replace("_", " ").split("/");
    optionCityElement = document.querySelector("#currentCity");
    optionCityElement.innerHTML = `
      <div class="currtent-city">
      The time in <span id="city">${optionCityName[1]}</span> now:</div>
      <div class="current-time">
      ${optionCityTime.format("HH:mm:ss")}</div>
      <div class="current-date">${optionCityTime.format(
        "dddd, MMMM DD, YYYY"
      )}</div>`;
  } else {
    inicialTime();
  }
}

inicialTime();
//setInterval(inicialTime, 1000);
