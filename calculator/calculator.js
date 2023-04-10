var buttons = document.getElementsByTagName("button");
var dp = document.getElementById("display");

for(var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function(){
        var value = this.getAttribute('data-value');
        if( value == "AC"){
                dp.innerText = '';    

        }else if(value == '='){
           dp.innerText = eval(dp.textContent);
          
        }else{
            dp.innerText += value;
           
        }

    });
}

