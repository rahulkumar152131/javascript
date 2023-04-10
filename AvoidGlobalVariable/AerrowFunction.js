// var multiply = function(x, y){
//     return x * y;
// }


// var multiply = (x, y) =>  x * y;
// var double = x => 2 *x;

// console.log(multiply(4, 6));

// console.log(double(4));



// function Person(name){
//     this.name = name;

//     console.log(this);
//     setTimeout(function() {
//         console.log(this);
//     }, 1000);
// }

// var p = new Person("Rahul");


console.log((function(x, f = () => x) {
    var x;
    var y = x;
    x = 2;
    return [x, y, f()];
  })(1));
