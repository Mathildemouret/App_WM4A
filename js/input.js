function fctHello(){
    var name = document.getElementById("inName");
    var strToshow = 'Hello';

    if(name.value) { strToshow += " " + name.value; }

    strToshow += " !";
    alert(strToshow);
}

document.addEventListener("DOMContentLoaded",function(event){
    console.log("Le dom est chargé");
    var btHello = document.getElementById("btHello");
    btHello.addEventListener("click",fctHello);
});