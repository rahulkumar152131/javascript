function fetchRandomDogImage(){
    var xhrRequest =new XMLHttpRequest();
    xhrRequest.onload = function(){
       
       var responseJSON = JSON.parse(xhrRequest.response);
       var imageUrl = responseJSON.message;
       console.log(imageUrl);
       $('#dog-image').attr("src", imageUrl);
    }
    xhrRequest.onerror = function(){
        console.log("Request Failed");
    };

    xhrRequest.open('get', "https://dog.ceo/api/breeds/image/random", true);
    xhrRequest.send();
}

// using jquery

// function fetchRandomDogImage(){
//     $.ajax({
//         url: 'https://dog.ceo/api/breeds/image/random',
//         method : 'GET',
//         success: function(data){
//             var imageUrl = data.message;
//             console.log(imageUrl);
//             $('#dog-image').attr("src", imageUrl);
//         }
//     }).fail(function(){
//         console.log("fail");
//     })
// }

// function fetchRandomDogImage(){

// $.get('https://dog.ceo/api/breeds/image/random',  function(data){
//                 var imageUrl = data.message;
//                 $('#dog-image').attr("src", imageUrl);
//          }).fail(function(xhr, textStatus, errorthrown){
//             console.log("Request failed");
//          });
// };

$("#fetch-dog-image-button").on('click', fetchRandomDogImage);
