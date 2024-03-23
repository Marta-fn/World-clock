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
