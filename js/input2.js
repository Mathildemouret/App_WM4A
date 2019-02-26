function switchImg(){
    var img = document.getElementById("myImg");
    if(img.getAttribute("src") == "img/pikachu.jpg") {
        img.src = "img/pikachu2.jpg"; 
    } else {
        img.src = "img/pikachu.jpg";
    }


}

document.addEventListener("DOMContentLoaded",function(event){
    console.log("Le dom est chargé");
    var btn = document.getElementById("btn");
    btn.addEventListener("click",switchImg);
});