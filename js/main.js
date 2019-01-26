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


// Get the navbar
var main = document.getElementById("main");
var navbar = document.getElementById("navbar");
var headerEnd = undefined;
if (main) {
    headerEnd = main.offsetTop;
}

window.onscroll = function () {
    navBarAction();

};

function navBarAction() {
    if (window.pageYOffset + navbar.offsetHeight >= headerEnd) {
        navbar.classList.add("navBlack")
    } else {
        navbar.classList.remove("navBlack");
    }
}


let row = document.querySelector("#other");
let jdata;
function loadDataFromJson(json) {
    jdata = json
    json.home.forEach(e => {
        var data = "<div class='card'>"
            + "<img src='https://via.placeholder.com/235x354' data-original='" + e.img + "' alt='" + e.author + "'>"
            + "<div class='middle'>"
            + "<div class='text'>" + e.author + "</div>"
            + "</div>"
            + "</div>";

        row.innerHTML += data;

        loadIntersection(document.querySelectorAll('#other .card'));

    });
}

loadJsonData(loadDataFromJson);

// window.addEventListener('load', async e => {
//     await   loadJsonData(loadDataFromJson);

//     if ('serviceWorker' in navigator) {
//         try {
//             navigator.serviceWorker.register('./js/lab-sw.js');

//         } catch (error) {
//             console.log('SW failed');

//         }
//     }
// });


// sr.reveal('.showcase-btn', {
//     duration:2000,
//     origin:'rights',
//     distance:'300px',
//     delay:2000
// });