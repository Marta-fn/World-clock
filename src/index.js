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
  let currentDateElement = currentCityElement.querySelector(".current-date");
  let currentTimeElement = currentCityElement.querySelector(".current-time");
  let currentCityTime = moment().tz("Europe/Lisbon");

  currentDateElement.innerHTML = currentCityTime.format("dddd, MMMM DD, YYYY");
  currentTimeElement.innerHTML = currentCityTime.format("HH:mm:ss");

  let citiesSelect = document.querySelector("#optionCity");
  citiesSelect.addEventListener("change", updateCity);
}

function updateCity(event) {
  let optionCityTimeZone = event.target.value;
  if (event.target.value.length > 0) {
    let optionCityTime = moment().tz(optionCityTimeZone);
    let currentCityElement = document.querySelector("#currentCity");
    let currentDateElement = currentCityElement.querySelector(".current-date");
    let currentTimeElement = currentCityElement.querySelector(".current-time");
    currentDateElement.innerHTML = optionCityTime.format("dddd, MMMM DD, YYYY");
    currentTimeElement.innerHTML = optionCityTime.format("HH:mm:ss");
  } else {
    inicialTime();
  }
}

inicialTime();
setInterval(inicialTime, 1000);
