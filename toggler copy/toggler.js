
var body = document.getElementsByTagName("body")[0];
var tog = document.getElementById("app");
var t = document.getElementById("indicator");

t.addEventListener("click", function(){
    body.classList.toggle("body-dark");
    t.classList.toggle("t-dark");
    tog.classList.toggle("app-dark");
});


    // console.log( mode);
    // if(mode=="white"){
    //     body.style.backgroundColor = "black";
    //     mode = "black";
    //     t.style.backgroundColor = "white";
    //     toggle.style.border =  "1.5px solid white";
    //     t.style.transform = "translateX(40px)";
    //    }else if(mode=="black"){
    //     body.style.backgroundColor = "white";
    //     mode = "white";
    //     t.style.backgroundColor = "black";
    //     toggle.style.border =  "1.5px solid black";
    //     t.style.transform = "translateX(0px)";
    //    }