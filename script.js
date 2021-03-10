// pseudo code
// start button
//   geteventlister - clcik to start function 
// timer  starts 
// question appears ?hide 
// answering question triggers next question. ?loop
// incorrect answer --> subtract from timer (if statement)
// game over = all answered or time=0 
//           = save initials and score. 

var startButton= document.getElementById("start-btn");
var timeEl= document.getElementById("time-remaining");

let questions =[
        q1={
            question:"Which of the following is not JavaScript Data Types?",
        answers: ["number", "float", "undefined","boolean"],
        correctAnswer:"float",
    }
]