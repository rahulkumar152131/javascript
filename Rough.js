




var clickCount = document.getElementById("num");
var boxClick = document.getElementById("div1");
var count = 0;
boxClick.addEventListener("click", function(event){
    console.log(event.type);
    console.log(count);
    count++;
    
    clickCount.innerText = count;
} );
