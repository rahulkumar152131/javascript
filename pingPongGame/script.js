// get the canvas element and its context
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// set initial positions for ball and paddles
let ballX = canvas.width / 2;
let ballY = canvas.height / 2;
let paddle1Y = canvas.height / 2 - 50;
let paddle2Y = canvas.height / 2 - 50;

// set the ball speed and direction
let ballSpeedX = 5;
let ballSpeedY = 5;

// set the score
let player1Score = 0;
let player2Score = 0;

// set the paddles' dimensions and speed
const PADDLE_HEIGHT = 100;
const PADDLE_THICKNESS = 10;
const PADDLE_SPEED = 10;

// function to draw the paddles
function drawPaddles() {
  // draw player 1's paddle
  ctx.fillRect(0, paddle1Y, PADDLE_THICKNESS, PADDLE_HEIGHT);
  // draw player 2's paddle
  ctx.fillRect(canvas.width - PADDLE_THICKNESS, paddle2Y, PADDLE_THICKNESS, PADDLE_HEIGHT);
}

// function to draw the ball
function drawBall() {
  ctx.beginPath();
  ctx.arc(ballX, ballY, 10, 0, Math.PI*2, true);
  ctx.fill();
}

// function to move the paddles
function movePaddles() {
  // move player 1's paddle up
  if (keys[87]) {
    paddle1Y -= PADDLE_SPEED;
  }
  // move player 1's paddle down
  if (keys[83]) {
    paddle1Y += PADDLE_SPEED;
  }
  // move player 2's paddle up
  if (keys[38]) {
    paddle2Y -= PADDLE_SPEED;
  }
  // move player 2's paddle down
  if (keys[40]) {
    paddle2Y += PADDLE_SPEED;
  }
}

// function to update the ball position and detect collisions
function update() {
  // move the ball
  ballX += ballSpeedX;
  ballY += ballSpeedY;
  // bounce the ball off the top and bottom walls
  if (ballY < 0 || ballY > canvas.height) {
    ballSpeedY = -ballSpeedY;
  }
  // check if the ball hit the paddles
  if (ballX < PADDLE_THICKNESS) {
    if (ballY > paddle1Y && ballY < paddle1Y + PADDLE_HEIGHT) {
      ballSpeedX = -ballSpeedX;
      let deltaY = ballY - (paddle1Y + PADDLE_HEIGHT / 2);
      ballSpeedY = deltaY * 0.35;
    } else {
      player2Score++;
      reset();
    }
  } else if (ballX > canvas.width - PADDLE_THICKNESS) {
    if (ballY > paddle2Y && ballY < paddle2Y + PADDLE_HEIGHT) {
      ballSpeedX =-ballSpeedX;
      let deltaY = ballY - (paddle2Y + PADDLE_HEIGHT / 2);
      ballSpeedY = deltaY * 0.35;
    } else {
      player1Score++;
      reset();
    }
}
}