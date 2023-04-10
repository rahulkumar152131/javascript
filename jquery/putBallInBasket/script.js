var myArray = ["red", "blue", "yellow", "lightgrey", 'darkorchid', 'black', 'orange', 'deeppink', 'green', 'purple', 'saddlebrown', 'lightseagreen', 'deepskyblue', 'firebrick', 'crimson'];
var box = $("#container");

$('#btn').on('click', function(){
    box.append('<div class="ball" style="background-color: ' + myArray[Math.floor(Math.random()*myArray.length)] + '"></div>');

