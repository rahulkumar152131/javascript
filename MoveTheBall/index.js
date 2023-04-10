const ball = document.getElementById("ball");
let ballTop = ball.offsetTop;
console.log(ballTop);
let ballLeft = ball.offsetLeft;
const ballHeight = ball.offsetHeight;
const ballWidth = ball.offsetWidth;

document.addEventListener("keydown", function(e) {
   var k = e.key;
    if (k == "w" ) { // W is pressed
        if (ballTop > 0) {
            ballTop--;
        }
    } else if (k == "a") { // A is pressed
        if (ballLeft > 0) {
            ballLeft--;
        }
    } else if (k == "s") { // S is pressed
        if (ballTop < window.innerHeight - ballHeight) {
            console.log(window.innerHeight+" "+ballHeight+"wb");
            ballTop++;
        }
    } else if (k == "d") { // D is pressed
        if (ballLeft < window.innerWidth - ballWidth) {
            ballLeft++;
        }
    }
    ball.style.top = ballTop + "px";
    console.log(ball.style.top);
    ball.style.left = ballLeft + "px";
    console.log(ball.style.left);
});