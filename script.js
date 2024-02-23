const hour = document.getElementById("hour");

const minutes = document.getElementById("minutes");

const seconds = document.getElementById("seconds");

const am_pm = document.getElementById("am-pm");

const day_shift = document.getElementById("day-shift");

const day = document.getElementById('day');

const date = document.getElementById('date');

let arrDay = [ 'SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY']

setInterval(() => {
  const clock = new Date();
  var h = (hour.innerHTML = clock.getHours());

  minutes.innerHTML = clock.getMinutes();

  seconds.innerHTML = clock.getSeconds();

  //for AM PM

  if (h >= "0" && h <= "11") {
    am_pm.innerText = "AM";
  } else {
    am_pm.innerText = "PM";
  }

  //--------------------------

  //for Shift in a day

  if (0 >= h <= 5 && h >= 22) {
    day_shift.textContent = "NIGHT";
  } else if (h >= 6 && h <= 11) {
    day_shift.textContent = "MORNING";
  } else if (h >= 12 && h <= 17) {
    day_shift.textContent = "AFTERNOON";
  } else if (h >= 18 && h <= 21) {
    day_shift.textContent = "EVENING";
  }

  //------------------------------

  day.textContent = arrDay[clock.getDay()];

  date.innerText = clock.toLocaleDateString();

}, 1000);
