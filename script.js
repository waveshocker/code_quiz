var startButton = document.querySelector("#start");

var totalSeconds = 0;

function startTimer() {
    
    totalSeconds = parseInt(document.getElementById("seconds").innerHTML);    
    interval = setInterval(function(){
      totalSeconds--;           
      document.getElementById("seconds").innerHTML = totalSeconds;
          
      if(totalSeconds === 0) {
        clearInterval(interval);
      }
    }, 1000);
  
  $('#Introduction').hide();
  $('.buttons').hide();
  
  $($questions.get(currentQuestion)).fadeIn();
  }
 
var answerKey = [1, 3, 1, 4, 2];
var score = 0;
var tracker = 0;

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
//attach a click listener to the HTML element with the id of 'next'
$('.option').click(function () {
    var answerValue = $(this).attr('value');
    console.log(answerValue);
    console.log(answerKey[tracker]);

    if (parseInt(answerValue) === parseInt(answerKey[tracker])) {
      score++;
      tracker++;
    }
    else {
      totalSeconds = totalSeconds - 20;
      tracker++;
    }
    
    //fade out the current question,
    //putting a function inside of fadeOut calls that function 
    //immediately after fadeOut is completed, 
    //this is for a smoother transition animation
    $($questions.get(currentQuestion)).fadeOut(function () {

        //increment the current question by one
        currentQuestion = currentQuestion + 1;

        //if there are no more questions do stuff
        if (currentQuestion == totalQuestions) {

        } else {
            //otherwise show the next question
            $($questions.get(currentQuestion)).fadeIn();

        }
    });

});

function inputScore() {
  
}