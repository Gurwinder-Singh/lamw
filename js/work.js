// https://jmperezperez.com/medium-image-progressive-loading-placeholder/
var wrapper =  document.querySelectorAll(".wrapper");
wrapper.forEach(e => {
    var attr = e.dataset.imageSrc;

    if (typeof attr !== typeof undefined && attr !== false) {

        e.style.background= "url("+attr+") center / cover no-repeat";
    }
  
  });

let lastScroll = 0;

document.addEventListener("scroll", function winScroll(){
    let st = window.pageYOffset || document.documentElement.scrollTop;
    if(st > lastScroll){
        //down scroll
    }else{
        //top scroll
    }
    lastScroll = st <=0 ? 0 :st; //for mobile or negative scroll
});

let row = document.querySelector(".row");
function loadDataFromJson(json) {
    json.work[0].art.forEach(e =>{
   var data =  `<div class="card" >
    <div class="wrapper">
    <img src="${e.img}" > 
        <div class="header">
            <div class="date">${e.time}</div>
        </div>
   
        <div class="content">
            <div class="author">${e.author}</div>
            <div class="data">${e.data}</div>
            <div class="link">
            ${e.link ? `<a href="${e.link}" target="_blank"> ${e.link_text}</a>`:``}
            </div>
        </div>
    </div>
</div>`;
   row.innerHTML += data;
    });
}

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
     let json = JSON.parse(this.responseText);
    // document.getElementById("demo").innerHTML = myObj.name;
    loadDataFromJson(json);

  }
};
xmlhttp.open("GET", "../images/data.json", true);
xmlhttp.send();
