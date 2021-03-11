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
var questionScreen = document.getElementById("question")
var startButton = document.getElementById("start-btn");
var timeEl = document.getElementById("time-remaining");
var questionTitle = document.getElementById("question-title");
var questionAnswers = document.getElementById("question-answers");
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
var currentIndex = 0; 

function quizBegin() {
startScreen.setAttribute("class", "hide")
questionScreen.removeAttribute("class");

//start the timer
//set the value of the time-remaining to the timer value
//introduct the first question to the user via another function call (startQuestions)
startQuestions();
}

function startQuestions(){
    questionTitle.textContent = questions[currentIndex].question;
    var answersAvailableTotel = questions[currentIndex].answers.length;

    questionAnswers.innerHTML = ""; 
    for(var i = 0 ; i < answersAvailableTotel; i++){
        var button = document.createElement("button");
        button.textContent = questions[currentIndex].answers[i]
        button.onclick = checkAnswer;
        questionAnswers.appendChild(button)
    }
}

function checkAnswer(){
    currentIndex++
    startQuestions();
}

startButton.onclick = quizBegin







// for (var i = 0; i < questions.length; i++) {

//     questionText.textContent = (questions[i].question);
//     aEl.textContent = (questions[i].answerA);
//     bEl.textContent = (questions[i].answerB);
//     cEl.textContent = (questions[i].answerC);
//     dEl.textContent = (questions[i].answerD);
// }