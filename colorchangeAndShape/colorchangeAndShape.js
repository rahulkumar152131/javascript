
  
var cir = document.getElementById('circle');
var col = document.getElementById('change-color');

col.addEventListener('click', function(){
    var colors = ["red", "green", "blue", "yellow", "purple", "orange"];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
        cir.style.backgroundColor = randomColor;
        
});

var sq = document.querySelector('.square');
var shape = document.getElementById('change-shape');
var s = "square";
shape.addEventListener('click', function(){
    sq.classList.toggle("square");
    sq.classList.toggle('triangle');
});