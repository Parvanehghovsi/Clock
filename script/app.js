const hour = document.querySelector("#hour");
const min = document.querySelector("#minutes");
const sec = document.querySelector("#second");

function time(){
  let date = new Date();
  let hours = date.getHours() * 30; // 360/12=30 deg
  let minutes = date.getMinutes() * 6; // 360/60=6 deg
  let seconds = date.getSeconds() * 6; // 360/60=6 deg

  console.log(seconds);
  sec.style.transform = `rotate(${seconds}deg)`;
  min.style.transform = `rotate(${minutes}deg)`;
  hour.style.transform = `rotate(${hours}deg)`;
};

setInterval(time, 0);

