// var para1 = document.getElementById("para1");
// para1.innerHTML = "welcome";

// $('#para1').html("welcome);
// $('p').html("welcome");

// var para = $('p');
// console.log(para);
// para.eq(0).html("change");

// $('#para1').hide();

// $('#para1').width(100);
// $('#para1').height(100);

// var para = $('p');
// var p1 = para[0];

// var dom = $(p1);
// console.log(dom);

// $('#para1').css({
//     // fontSize: "50px",
//     color: "red",
//     width : "300px",
//     backgroundColor :"green",
// });

/*
    function $(query){
        return document.querySelector(query);
    }
*/


$('div').css({
    width :"100px",
    height : "100px",
    backgroundColor : "cyan"
})

// $('div').click(function(){
//     alert("div Clicked");
// })

$('div').on('click', function(e){
    var element = $(this);
    element.width(element.width()+10+"px");
    element.height(element.height()+10+"px");
    // alert("div Clicked");
})

$('a').on('click', function(event){
    event.preventDefault();
    alert("a tag Clicked");
})



