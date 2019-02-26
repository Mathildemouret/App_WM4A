function showHello(){
    alert('Hello world');
}

document.addEventListener("DOMContentLoaded",function(event){
    console.log("Le dom est chargé");
    showHello();
});