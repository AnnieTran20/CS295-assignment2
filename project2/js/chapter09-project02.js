/* add code here */

document.getElementById("thumbnails").addEventListener("click", function(e) {

    //get the source and title of whatever is clicked
    var src = e.target.getAttribute('src');
    var title = e.target.getAttribute("title");

    //change the new source to medium
    if(src.includes("small")){
        var newsrc = src.replace("small", "medium");
    }
    

    //change the source and title of the large img, also the figcaption
    var imgInFigure = document.querySelector('#featured').querySelector('img');
    imgInFigure.src = newsrc;
    imgInFigure.title = title;
    document.getElementsByTagName("figcaption")[0].innerText = title;

});

//moveover and moveout faded and animation effects
document.getElementById("featured").addEventListener("mouseover", function(e) {

    document.getElementsByTagName("figcaption")[0].style.transition = "opacity 1s";
    document.getElementsByTagName("figcaption")[0].style.opacity = "0.8";
    

});

document.getElementById("featured").addEventListener("mouseout", function(e) {
    document.getElementsByTagName("figcaption")[0].style.transition = "opacity 1s";    
    document.getElementsByTagName("figcaption")[0].style.opacity = "0";

});