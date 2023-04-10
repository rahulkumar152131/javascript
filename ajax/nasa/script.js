function displayImage(data){
    
        

    // $('<img>', {
    //     src: data.hdurl,
    //     width: "100vw",
    //     height:'100vh',
    // }).appendTo('#image-container');


    // var img = $(document.createElement('img'));
    // img.attr('src', data.url);
    // img.appendTo('#image-container');
    // console.log(data);


    // var img = $(document.createElement('img')).attr('src', data.url).appendTo('#image-container');
    $('#image-container').append('<div id="date">'+data.date+'</div>');
    $('#image-container').append('<img src = '+data.url+'>');
    

    // var date = $(document.createElement('div'));
    // date.innerHTML = data.date;
    // date.apend('#image-container');


}


$.ajax({
    // url: 'https://api.nasa.gov/planetary/apod?api_key=lTI9hhnMb3LNQvZsbcUBElwe2rZFV6Iv6yt2GIbm&date=2019-04-23',
    url: 'https://api.nasa.gov/planetary/apod',
    method: 'GET',
    success: displayImage,
    data: {
        api_key:'lTI9hhnMb3LNQvZsbcUBElwe2rZFV6Iv6yt2GIbm',
        // date:'2018-06-05',
    }
});