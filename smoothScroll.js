// var navMenuAnchorTag=document.querySelectorAll('.nav-menu a');
// var interval;
// for(var i=0;i<navMenuAnchorTag.length;i++){
//     navMenuAnchorTag[i].addEventListener('click',function(event){
//         event.preventDefault();
//         var targetSectionId=this.textContent.trim().toLowerCase();
//         var targetSection=document.getElementById(targetSectionId);
//         console.log(targetSection);
//         interval=setInterval(scrollVertically,20,targetSection);
//     });
// }
// function scrollVertically(targetSection){
//     var targetSectionCoordinates=targetSection.getBoundingClientRect();
//     if(targetSectionCoordinates.top<=0){
//         clearInterval(interval);
//         targetSectionCoordinates=0;
//         return;
//     }
//     window.scrollBy(0,50);
// }

var tag = document.querySelectorAll(".nav-menu a");
 for(var i = 0; i < tag.length; i++){
    tag[i].addEventListener('click', function(e){
        e.preventDefault();
        var target = this.textContent.trim().toLowerCase();
       
        var targetSection =document.getElementById(target);
        var interval = setInterval(function(){
            var cordinate = targetSection.getBoundingClientRect();
            // console.log(cordinate.top);
            if(cordinate.top <= 0 ){
                clearInterval(interval);
                cordinate.top = 0;
                return;
            }
            window.scrollBy(0, 50);
            
        }, 20);

      
    });
    
 }
 
//  var interval;

// var tag = document.querySelectorAll(".nav-menu a");
//  for(var i = 0; i < tag.length; i++){
//     tag[i].addEventListener('click', function(e){
//         e.preventDefault();
//         var target = this.textContent.trim().toLowerCase();
//         if(target == "home"){
//             window.scrollBy(0, 0);
//         }else{
//         var targetSection =document.getElementById(target);
//         interval = setInterval(function(){
//            scroll(targetSection);
//         }, 20);
//       }
//     });
    
//  }

 function scroll(targetSection){
    var cordinate = targetSection.getBoundingClientRect();
    if(cordinate.top <= 0){
        clearInterval(interval);
        return;
    }
    window.scrollBy(0, 50);
 }

//  var skillsContainer = document.getElementById("skills");
// var progressBars = document.querySelectorAll('.skill-progress > div');
// // console.log(skillsContainer);
// window.addEventListener('scroll', checkScroll);
// var animationDone = false;


// function initialBars(){
//     for( let bar of progressBars){
//         bar.style.width = 0 + '%';
//     }
// }

// initialBars();

// function fillBars(){
//     for (let bar of progressBars) {        
//         let targetWidth = bar.getAttribute('data-bar-width');
//         let currentWidth = 0;
        // let interval = setInterval(function () {
        //     if (currentWidth >= targetWidth) {
        //         clearInterval(interval);
        //         return;
        //     }
//             currentWidth++;
//             bar.style.width = currentWidth + '%';
//         }, 20);
//     }
// }

// function checkScroll(){
//     //you have to ckeck whether skill container is visivle
    
//     var cordinate = skillsContainer.getBoundingClientRect();
   
//     if(!animationDone && cordinate.top < window.innerHeight){
//         animationDone = true;
//         // console.log("skill section visible")
//         fillBars();
//     }else if(cordinate.top > window.innerHeight){
//         animationDone = false;
//         initialBars();
//     }
// }



var progressBars = document.querySelectorAll(".skill-progress > div");

window.addEventListener("scroll", checkScroll);

function initialiseBar(bar) {
    bar.setAttribute("data-visited", false);
    bar.style.width = 0 + '%';
}

for (var bar of progressBars) {
    initialiseBar(bar);
}



function fillBar(bar) {

    var currentWidth = 0;
    var targetWidth = bar.getAttribute("data-bar-width");
    var interval = setInterval(function () {
        if (currentWidth >= targetWidth) {
            clearInterval(interval);
            return;
        }
        currentWidth++;
        bar.style.width = currentWidth + '%';
    }, 5);

}



// This function uses a for loop for individual progress bars.
function checkScroll() {

    for (let bar of progressBars) {
        var barCoordinates = bar.getBoundingClientRect();
        if ((bar.getAttribute("data-visited") == "false") &&
        barCoordinates.top < window.innerHeight) {
            bar.setAttribute("data-visited", true);
            fillBar(bar);
        } else if (barCoordinates.top > window.innerHeight) {
            bar.setAttribute("data-visited", false);
            initialiseBar(bar);
        }

    }
}





// This event fills the progress bars if they are displayed on the screen when the page is loaded.
//window.addEventListener("load", checkScroll);


