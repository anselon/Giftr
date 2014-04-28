$(document).ready(function() 
{ 
    
//BUY

    //initialize variable for gallery images
    var buyimages = $("#buy #gallery img");
    //initialize variable for gallery thumb images
    var buythumbs = $("#buy #thumbs img");
    //initialize variable for price blurbs
    var buyblurbs = $("#buy #blurbs div");

    buyimages.fadeOut();
    buyblurbs.fadeOut();

    //label divs
    classify(buyimages, buythumbs, buyblurbs);
    
    
    $(buyimages[0]).fadeIn();
    $(buyblurbs[0]).fadeIn();

    // onclick change gallery image to new image corresponding to chosen thumbnail
    buythumbs.click(function(){ 

    var imageclass = $(this).attr("class");
 
   //add in exception if current thumbnail is clicked

    //fadeout old blurb and image
    $("#buy #gallery>img").fadeOut(500);
    $("#buy #blurbs>div").fadeOut(500);

    //fade in new blurb and image
    $("#buy #gallery>img." + imageclass).fadeIn(500);
    $("#buy #blurbs>div." + imageclass).fadeIn(500);
    });
   });

$(document).ready(function() 
{ 

//MAKE

    var makeimages = $("#make #gallery img");
    var makethumbs = $("#make #thumbs img");
    var makeblurbs = $("#make #blurbs div");

    makeimages.fadeOut();
    makeblurbs.fadeOut();

    classify(makeimages, makethumbs, makeblurbs);
    $(makeimages[0]).fadeIn();
    $(makeblurbs[0]).fadeIn();


    makethumbs.click(function(){ 

    var imageclass = $(this).attr("class");
   //add in exception if current thumbnail is clicked

    makeimages.fadeOut(500);
    makeblurbs.fadeOut(500);


    $("#make #gallery>img." + imageclass).fadeIn(500);
    $("#make #blurbs>div." + imageclass).fadeIn(500);
    });

//EXPERIENCE
    var expimages = $("#experience #gallery img");
    var expthumbs = $("#experience #thumbs img");
    var expblurbs = $("#experience #blurbs div");

    expimages.fadeOut();
    expblurbs.fadeOut();    

    $(expimages[0]).fadeIn();
    $(expblurbs[0]).fadeIn();

    classify(expimages, expthumbs, expblurbs);
    
    //function: onclick->thumb->show gallery image -> show blurb
    expthumbs.click(function(){ 

    var imageclass = $(this).attr("class");
   //add in exception if current thumbnail is clicked

    expimages.fadeOut(500);
    expblurbs.fadeOut(500);


    $("#experience #gallery>img." + imageclass).fadeIn(500);
    $("#experience #blurbs>div." + imageclass).fadeIn(500);
    });



});

//set class for all images, thumbs and blurbs
function classify(images, thumbs, blurbs){
    for (i=0; i<thumbs.length; i++)
    {
        $(thumbs[i]).attr( 'class', "images-"+i);
        $(images[i]).attr('class', "images-"+i);
        $(blurbs[i]).attr('class', "images-"+i);
    }
}
