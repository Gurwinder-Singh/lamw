window.sr = ScrollReveal();

covers = document.getElementsByClassName("cover-work")
for (let index = 0; index < covers.length; index++) {
   covers[index].style.visibility ="hidden";
}
 contents = document.getElementsByClassName("content");
for (let index = 0; index < contents.length; index++) {
    contents[index].style.visibility ="hidden";
    
}
 works = document.getElementsByClassName("show-work");
 for (let index = 0; index < works.length; index++) {
    works[index].style.visibility ="hidden";
    
}
sr.reveal('.cover-work', {
    duration:2000,
    origin:'bottom',
    distance:'50px'
});
sr.reveal('.content', {
    duration:2000,
    origin:'top',
    distance:'300px'
});

 sr.reveal('.show-work', {
    duration:2000,
    origin:'left',
    distance:'300px'
});

// sr.reveal('.showcase-btn', {
//     duration:2000,
//     origin:'rights',
//     distance:'300px',
//     delay:2000
// });