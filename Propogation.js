var innerDiv = document.getElementById('inner');
innerDiv.addEventListener('click', function(event){
    console.log('Click Inner Div');
    event.stopPropagation();
});


var outerDiv = document.getElementById('outer');
outerDiv.addEventListener('click', function(event){
    console.log('Click Outer Div');
    event.stopPropagation();
});


document.addEventListener('click', function(){
    console.log('Click Document');
});