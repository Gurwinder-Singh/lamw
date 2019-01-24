function toggleMenu(x) {
    x.classList.toggle("change");
    menu = document.getElementsByClassName("menu");
    menu[0].classList.toggle("menu_visible");
}
var oldLoad = window.onload;
var preloader= document.querySelector(".preloader");
function setLoader(func) {
    if(preloader){
      window.onload = func;   
    }
}

function preloadFunc(){
    if(oldLoad){
        oldLoad();
    }
    preloader.remove();
}

setLoader(preloadFunc);