$(document).ready(function() 
{ 
    
//BUY


    var buyimages = $("#buy #gallery img");
    var buythumbs = $("#buy #thumbs img");

    buyimages.fadeOut();
    classify(buyimages, buythumbs);
    $(buyimages[0]).fadeIn();


    buythumbs.click(function(){ 

    var imageclass = $(this).attr("class");
 
   //add in exception if current thumbnail is clicked

    buyimages.fadeOut(500);

    
    $("#buy #gallery>img." + imageclass).fadeIn(500);
    });



//MAKE

    var makeimages = $("#make #gallery img");
    var makethumbs = $("#make #thumbs img");

    makeimages.fadeOut();
    classify(makeimages, makethumbs);
    $(makeimages[0]).fadeIn();


    makethumbs.click(function(){ 

    var imageclass = $(this).attr("class");
   //add in exception if current thumbnail is clicked

    makeimages.fadeOut(500);


    $("#make #gallery>img." + imageclass).fadeIn(500);
    });

//EXPERIENCE
    var expimages = $("#experience #gallery img");
    var expthumbs = $("#experience #thumbs img");

    expimages.fadeOut();

    $(expimages[0]).fadeIn();
    classify(expimages, expthumbs);
     expthumbs.click(function(){ 

    var imageclass = $(this).attr("class");
   //add in exception if current thumbnail is clicked

    expimages.fadeOut(500);


    $("#experience #gallery>img." + imageclass).fadeIn(500);
    });



});

function classify(images, thumbs){
    for (i=0; i<thumbs.length; i++)
    {
        $(thumbs[i]).attr( 'class', "images-"+i);
        $(images[i]).attr('class', "images-"+i);
    }
}