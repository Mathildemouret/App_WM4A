

document.addEventListener("DOMContentLoaded",function(event){
    console.log("Le dom est chargé");
    var btn = document.getElementById("btn");
    var form = document.getElementById("form");
    btn.addEventListener("click",alert("Enregistré!"));
    form.addEventListener("click",form.reset());
});