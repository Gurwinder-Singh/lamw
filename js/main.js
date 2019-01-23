window.sr = ScrollReveal();

covers = document.getElementsByClassName("cover-work")
for (let index = 0; index < covers.length; index++) {
    covers[index].style.visibility = "hidden";
}
contents = document.getElementsByClassName("content");
for (let index = 0; index < contents.length; index++) {
    contents[index].style.visibility = "hidden";

}
works = document.getElementsByClassName("show-work");
for (let index = 0; index < works.length; index++) {
    works[index].style.visibility = "hidden";

}
sr.reveal('.cover-work', {
    duration: 2000,
    origin: 'bottom',
    distance: '50px'
});
sr.reveal('.content', {
    duration: 2000,
    origin: 'top',
    distance: '300px'
});

sr.reveal('.show-work', {
    duration: 2000,
    origin: 'left',
    distance: '300px'
});

function toggleMenu(x) {
    x.classList.toggle("change");
    menu = document.getElementsByClassName("menu");
    menu[0].classList.toggle("menu_visible");
    // menu[0].style.display = menu[0].style.display == "block" ? "none":"block";
}
// Get the navbar
var main = document.getElementById("main");
var navbar = document.getElementById("navbar");
var headerEnd = undefined;
if(main){
    headerEnd =  main.offsetTop;
}

window.onscroll = function() {
    navBarAction();
  
};

function navBarAction() {
    if (window.pageYOffset + navbar.offsetHeight >= headerEnd) {
      navbar.classList.add("navBlack")
    } else {
       navbar.classList.remove("navBlack");
    }
  }

// sr.reveal('.showcase-btn', {
//     duration:2000,
//     origin:'rights',
//     distance:'300px',
//     delay:2000
// });