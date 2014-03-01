Document$(document).ready(function() 
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
	$(img).click(function(){alert("hello");});
	questions.hide();
    show(index);
    
    //when next is click show next question
    $('#nextButton').click(function(){
        if(index < questions.length-1) 
        {
            index= index+1;
            show(index);
            
        }
        //if it's the last question, hide next and show view results
        if(index == questions.length-1)  {$('#nextButton').hide()}
        
    });
    
    
});
