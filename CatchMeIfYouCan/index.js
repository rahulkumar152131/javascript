// "use strict";

// const rect = document.getElementById("rectangle");
// const browserW = document.documentElement.clientWidth;
// const browserH = document.documentElement.clientHeight;

// rect.addEventListener("mouseover", moveRect);

// function moveRect() {
//   const newLeft = Math.floor(Math.random() * (browserW - rect.offsetWidth));
//   const newTop = Math.floor(Math.random() * (browserH - rect.offsetHeight));
//   rect.style.left = newLeft + "px";
//   rect.style.top = newTop + "px";
// }



var rect = document.getElementById("rectangle");

 rect.addEventListener('mouseover', function(){
    let width = Math.random()*(window.innerWidth-55);
    let height = Math.random()*(window.innerHeight-55);
    rect.style.top = (height)+"px";
    rect.style.left = (width)+"px";
 });