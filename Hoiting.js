var a = 1;

function b() {
    a = 10;
    return;
    function a() {
      var a = 3;
    }
}

b();
console.log(a);