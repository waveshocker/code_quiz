var startButton = document.querySelector("#start");

var totalSeconds = 0;

function startTimer() {
    
    totalSeconds = parseInt(document.getElementById("seconds").innerHTML);    
    interval = setInterval(function(){
      totalSeconds--;           
      document.getElementById("seconds").innerHTML = totalSeconds;
          
      if(totalSeconds === 0) {
        clearInterval(interval);
        alert("Time to take a break!");
      }
    }, 1000);
    
  }
 

startButton.addEventListener("click", startTimer);

//Store the total number of questions
var totalQuestions = $('.questions').length;

//Set the current question to display to 1
var currentQuestion = 0;

//Store the selector in a variable.
$questions = $('.questions');

//Hide all the questions
$questions.hide();

//Show the first question
$($questions.get(currentQuestion)).fadeIn();

//attach a click listener to the HTML element with the id of 'next'
$('#next').click(function () {

    //fade out the current question,
    //putting a function inside of fadeOut calls that function 
    //immediately after fadeOut is completed, 
    //this is for a smoother transition animation
    $($questions.get(currentQuestion)).fadeOut(function () {

        //increment the current question by one
        currentQuestion = currentQuestion + 1;

        //if there are no more questions do stuff
        if (currentQuestion == totalQuestions) {

            var result = sum_values()

            //do stuff with the result
            alert(result);

        } else {

            //otherwise show the next question
            $($questions.get(currentQuestion)).fadeIn();

        }
    });

});