/* add code here */
// $(function () {
//     $('div img').on('click', function(e){
//     // construct preview filename based on existing img 
//     var alt = $(this).attr('alt'); 
//     var src = $(this).attr('src'); 
//     var newsrc = src.replace("small","medium"); 

//     // make dynamic element with larger preview image and caption 
    
//     var image = $('<img src="' + newsrc + '">'); 
    
//     $('figure').append(image);

        
//     });
// });

document.getElementById("thumbnails").addEventListener("click", function(e) {


    var src = e.target.getAttribute('src');
    console.log(src);
    var newsrc = src.replace("small", "medium");

    //remove the old img node
    var imgInFigure = document.querySelector('#featured').querySelector('img');
    console.log(imgInFigure);
    imgInFigure.src = newsrc;
    // figureNode.removeChild(imgInFigure);
    // alert(e.target.innerText);

    //add new img node that displays the bigger version of whatever was clicked
    // const mediumImg = document.createElement('img');
    // mediumImg.src = newsrc;
    // figureNode.appendChild(mediumImg);
})