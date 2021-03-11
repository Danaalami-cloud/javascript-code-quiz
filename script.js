// pseudo code
// start button
//   geteventlister - clcik to start function 
// timer  starts 
// question appears ?hide 
// answering question triggers next question. ?loop
// incorrect answer --> subtract from timer (if statement)
// game over = all answered or time=0 
//           = save initials and score. 
var startScreen = document.getElementById("start-screen")
var startButton = document.getElementById("start-btn");
var timeEl = document.getElementById("time-remaining");
var score = 0;
let questions = [
    {
        question: "Which of the following is not JavaScript Data Types?",
        answers: ["A.number", "B.float", "C.undefined", "D.boolean"],
        correctAnswer: "B.float",
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: ["head", "body", "script", "shoulders"],
        correctAnswer: "script",
    },
    {
        question: "What is the original name of JavaScript?",
        answers: ["Mocha", "JavaScript", "EScript", "LiveScript"],
        correctAnswer: "Mocha",


    }
]

function quizBegin() {
startScreen.setAttribute("class", "hide")
}

startButton.onclick = quizBegin







// for (var i = 0; i < questions.length; i++) {

//     questionText.textContent = (questions[i].question);
//     aEl.textContent = (questions[i].answerA);
//     bEl.textContent = (questions[i].answerB);
//     cEl.textContent = (questions[i].answerC);
//     dEl.textContent = (questions[i].answerD);
// }