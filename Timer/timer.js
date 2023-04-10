
var play = document.getElementById("play");
var pause = document.getElementById("pause");
var resume = document.getElementById("resume");

var hour = document.getElementById("hour")
var min = document.getElementById("min")
var sec = document.getElementById("sec")
var milisec = document.getElementById("milisec")
var interval

play.addEventListener('click', function(){
  interval = setInterval(() => {
    milisec.innerText++;
    if(milisec.innerText == 99){
      milisec.innerText = 0;
      sec.innerText ++;
     
    }

    if(min.innerText == 59){
      min.innerText = 0;
      hour.innerText++;
    }

    if(sec.innerText == 59){
      sec.innerText = 0;
      min.innerText++
      
    }
    milisec.innerText = milisec.innerText.toString().padStart(3, "0");
    sec.innerText = sec.innerText.toString().padStart(2, "0");
    min.innerText = min.innerText.toString().padStart(2, "0");
    hour.innerText = hour.innerText.toString().padStart(2, "0");
    
  }, 10);
  
  play.innerText = "Play";
});

pause.addEventListener("click", function(){
  if(milisec.innerHTML > 0){
    clearInterval(interval);
    play.innerText = "Resume"
  }
    
});

resume.addEventListener('click', function(){
  clearInterval(interval);
  hour.innerText = "00";
  min.innerText = "00";
  sec.innerText = "00";
  milisec.innerText = "000";
  play.innerText = "Play";
});





































// const timer = document.querySelector('.timer h1');
// let seconds = 0;
// let minutes = 0;
// let hours = 0;

// function startTimer() {
//   setInterval(function() {
//     seconds++;
//     if (seconds === 60) {
//       seconds = 0;
//       minutes++;
//       if (minutes === 60) {
//         minutes = 0;
//         hours++;
//       }
//     }
//     let formattedHours = hours;
// if (hours < 10) {
//   formattedHours = '0' + hours;
// }

// let formattedMinutes = minutes;
// if (minutes < 10) {
//   formattedMinutes = '0' + minutes;
// }

// let formattedSeconds = seconds;
// if (seconds < 10) {
//   formattedSeconds = '0' + seconds;
// }

// timer.textContent = formattedHours + ':' + formattedMinutes + ':' + formattedSeconds;
//   }, 1000);
// }

// startTimer();
