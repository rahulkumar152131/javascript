var nasaImages = $("#nasa-images");
var input = $("#datepicker").datepicker({ dateFormat: 'yy-mm-dd' });

$("form button").click(function (e) {
    e.preventDefault();
    
    var date = input.val();
    
    if( date === "") {
        alert("Please fill the field");
        return;
    }

    // let url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=lTI9hhnMb3LNQvZsbcUBElwe2rZFV6Iv6yt2GIbm?earth_date=" + date + "";
    let url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date='+date+'&api_key=lTI9hhnMb3LNQvZsbcUBElwe2rZFV6Iv6yt2GIbm'
    
    $.get(url, function (data) {
        let photos = data.photos;
        
        if(photos.length === 0 ) {
            alert("No photos available for this date");
            return;
        }
        
        $("#nasa-images img").remove();

        for (let photo of photos) {
            nasaImages.append('<img src="' + photo.img_src + '" >');
        }
    });

});
