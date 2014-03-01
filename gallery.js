$(document).ready(function() 
{ 
    
    $("#buygallery").click( function(){
        alert("fff");
    });
    var images = $("#buygallery img");
    var buythumbs = $("#buythumbs img");

    images.fadeOut();

    $(images[0]).fadeIn();


    $('#buythumbs img').click(function(){ 

    var id = $(this).attr("id");
   //add in exception if current thumbnail is clicked

    images.fadeOut(500);


    $("#buygallery>img#" + id).fadeIn(500);
    });


});