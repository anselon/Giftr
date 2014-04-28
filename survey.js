$(document).ready(function() 
{   

    var index = 0;
    //get all questions 
    var questions = $("#questions div"); 
    //index all the questions
    for (i=0; i<questions.length; i++)
    {
        $(questions[i]).addClass("questions-"+i);
    }
     
    //function to show question by index: num
    function show(num)
    {
        questions.hide();
        $(".questions-"+num).show();   
    }

	
    show(index);
    $('#centeredresultsbutton').hide();

    var progress = 1;
    //when next is click show next question
    $('a#nextButton').click(function(){

        if(index < questions.length-1) 
        {
            index= index+1;
            show(index);
            
        }
        //if it's the last question, hide next and show view results
        if(index == questions.length-1)  {
            $('#nextButton').hide();
            $('#skipButton').hide();
        }
        progress++;
        $('#ribbon').attr('src','Image/RibbonProgress'+progress+'.png');

        
    });

    $('a#skipButton').click(function(){

        if(index < questions.length-1) 
        {
            index= index+1;
            show(index);
            
        }
        //if it's the last question, hide next and show view results
        if(index == questions.length-1)  {
            $('#nextButton').hide();
            $('#skipButton').hide();
            $('.resultsButton').hide();
            $('div#centeredresultsbutton').show();
        }

        
    });
    
    
});
