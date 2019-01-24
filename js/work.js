// https://jmperezperez.com/medium-image-progressive-loading-placeholder/
var wrapper =  document.querySelectorAll(".wrapper");
wrapper.forEach(e => {
    var attr = e.dataset.imageSrc;

    if (typeof attr !== typeof undefined && attr !== false) {

        e.style.background= "url("+attr+") center / cover no-repeat";
    }
  
  });