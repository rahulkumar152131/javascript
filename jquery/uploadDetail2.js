



var add = document.getElementById("btn");
var list = document.getElementById("list");

add.addEventListener('click', function(){
    var roll = document.getElementById("rollNo").value;
    var name = document.getElementById("name").value;
    var marks = document.getElementById("marks").value;
    console.log(roll, name, marks);
    if(roll == '' || name == '' || marks == ''){
        alert("hey");   
    }else{
        var l = document.createElement("li");
        l.innerHTML = "Roll no - <span > " + roll + "</span>, <span> " + name + " </span> has scored <span> " + marks + "</span> marks";
        list.appendChild(l);
        console.log(l);

    }

});
