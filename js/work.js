// https://jmperezperez.com/medium-image-progressive-loading-placeholder/
/**
 * @author Gurwinder Singh
 */
var wrapper = document.querySelectorAll(".wrapper");
wrapper.forEach(e => {
    var attr = e.dataset.imageSrc;

    if (typeof attr !== typeof undefined && attr !== false) {

        e.style.background = "url(" + attr + ") center / cover no-repeat";
    }

});

// let lastScroll = 0;

//Old not in use
// document.addEventListener("scroll", function winScroll() {
//     let st = window.pageYOffset || document.documentElement.scrollTop;
//     if (st > lastScroll) {
//         //down scroll
//     } else {
//         //top scroll
//     }
//     lastScroll = st <= 0 ? 0 : st; //for mobile or negative scroll
// });

let row = document.querySelector(".row");
let active_category = "art";
let jdata;
function loadDataFromJson() {
    row.innerHTML = "";

    let data = "";

    if (active_category === "art") {
        jdata.work[0].art.forEach(e => {
            data += "<div class='card load' >"
                + "<div class='wrapper'>" +
                "<img src='https://via.placeholder.com/270x378' data-original='" + e.img + "' alt=" + e.author + "> "
                + "<div class='header'>"
                + " <div class='date'>" + e.time + "</div>"
                + "</div>"
                + "<div class='content'>"
                + "<div class='author'>" + e.author + "</div>"
                + "<div class='data'>" + e.data + "</div>"
                + "<div class='link'>";
            if (e.link) {
                data += "<a href='" + e.link + "' target='_blank'> " + e.link_text + "</a>";
            }
            data += "</div>"
                + "</div>"
                + "</div>"
                + "</div>";

        });
    } else if (active_category === "cover") {
        jdata.work[0].cover.forEach(e => {
        data += "<div class='cover load'>"
            + "<div class='wrapper'>"
            + "<img src='https://via.placeholder.com/550x200'  data-original='" + e.img + "' alt=" + e.author + ">"
            + "<div class='content'>"
            + "<div class='author'>" + e.author + "</div>"
            + "<div class='data'>" + e.data + "</div>"
            +"</div>"
            + "</div>"
            
            + "</div>";
        });
    }
    row.innerHTML += data;
    loadIntersection(document.querySelectorAll('.load'));


}

function fetchJsonData(json) {
    jdata = json;
    loadDataFromJson();
}

loadJsonData(fetchJsonData);

let category = document.querySelectorAll(".categort");

category.forEach(e => {
    e.addEventListener("click", function (evt) {
        let click_id = e.getAttribute("id");
        if (click_id !== active_category) {
            active_category = click_id;
            loadDataFromJson();
        } else {
        }
    });
});


