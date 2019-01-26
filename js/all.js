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



function onEntry(entry) {
    entry.forEach((change) => {
        if (change.isIntersecting && !change.target.classList.contains("visible")) {
            lazyLoadImage(change.target);
        }
    });
}

function lazyLoadImage(target) {
    target.classList.add('visible');
    img = target.querySelector("img");
    img.src = img.dataset.original;
}

function loadIntersection(elements) {
    // list of card
  

   if ("IntersectionObserver" in window) {
       // list of options
       let options = {
           threshold: [0.5]
       };

       // instantiate a new Intersection Observer
       let observer = new IntersectionObserver(onEntry, options);

       // loop through all elements
       // pass each element to observe method
       // ES2015 for-of loop can traverse through DOM Elements
       for (let elm of elements) {
           observer.observe(elm);
       }
   }else{
       for (let elm of elements) {
          lazyLoadImage(elm);
       }
   }
}

function loadJsonData(func) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let json = JSON.parse(this.responseText);
        
            func(json);
    }
};

xmlhttp.open("GET", "../images/data.json", true);
xmlhttp.send();
}


