var list = $('#breed-list');
var breed = $('#btn');
var next = $('#next');
var im = $('#image');

$.get("https://dog.ceo/api/breeds/list/all", function(data){
    var msg = data.message;
    // console.log(msg);
    for(let li in msg){
        list.append('<option value='+li+'>' + li + '</option>');
    }
});

breed.click(function(e){
    e.preventDefault();
    $('#image img').remove();
   var b = list.val();
//    var url = 'https://dog.ceo/api/breed/'+b+'/images';
//    var url = 'https://dog.ceo/api/breed/'+b+'/images';

    let url = "https://dog.ceo/api/breed/" + b + "/images/random";

// var url = 'https://images.dog.ceo/breeds/mastiff-bull/images/random';
//    console.log(url);
   $.get(url, function(data){
    var m = data.message;
    // console.log(m);
    // for(let l of m){
        // im.append('<div>'+b+'</div>')
        im.append('<img src="'+m+'">');
    // }
   });

});

next.click(function(e){
    e.preventDefault();

    $('#image img').remove();
    var b = list.val();
   
          let url = "https://dog.ceo/api/breed/" + b + "/images/random"; 
          $.get(url, function(data){
        var m = data.message;
        console.log(m);
        // for(let l of m){
            // im.append('<div>'+b+'</div>')
            im.append('<img src="'+m+'">');
        // }
       });

  
   
})




