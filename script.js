// function clock() {
//   let hours = document.getElementById('hour');
//   let minutes = document.getElementById('minute');
//   let secondes = document.getElementById('secondes');
//   let ampm = document.getElementById('ampm');

//   let h = new Date().getHours();
//   let m = new Date().getMinutes();
//   let s = new Date().getSeconds();
//   var am = 'AM';

//   if(h > 12) {
//     h = h - 12;
//     var am = "PM"
//   }

//   h = (h < 0) ? '0' + h : h;
//   m = (h < 0) ? '0' + m : m;
//   s = (s < 0) ? '0' + s : s;

//   hours.textContent = h;
//   minutes.textContent = m;
//   secondes.textContent = s;
//   ampm.textContent = am;
// }

// let interval = setInterval(clock, 1000)



let hour = document.getElementById('hour');
let minute = document.getElementById('minute');
let secondes = document.getElementById('secondes');
let ampm = document.getElementById('ampm');

function clock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let am = 'AM';

  if(h > 12){
    h = h - 12;
    am = 'PM'
  }

  h = (h < 10) ? '0' + h : h;
  m = (m < 10) ? '0' + m : m;
  s = (s < 10) ? '0' + s : s;

  hour.textContent = h;
  minute.textContent = m;
  secondes.textContent = s;
  ampm.textContent = am
}

let interval = setInterval(clock, 1000);
