// pseudo code
// start button
//   geteventlister - clcik to start function
// timer  starts
// question appears ?hide
// answering question triggers next question. ?loop
// incorrect answer --> subtract from timer (if statement)
// game over = all answered or time=0
//           = save initials and score.
var startScreen = document.getElementById("start-screen");
var questionScreen = document.getElementById("question");
var startButton = document.getElementById("start-btn");
var timeElement = document.querySelector("#countdown");
var questionTitle = document.getElementById("question-title");
var questionAnswers = document.getElementById("question-answers");
var submitScoreButton = document.getElementById("submit-score"); 
var score = 0;
var timer;
var timeCount = 60;
var winCounter = 0;
var loseCounter = 0;
var isWin = false;
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
  },
  {
    question: "The function and  var are known as",
    asnwers: ["Key words", "Data types", "Decleration statements", "Prototype"],
    correctAnswer: "Decleration statement",
  },

  {
    question: "In JavaScript the x===y statement implies that",
    answers: [
      "Both x and y are equal in value, type and reference address as well",
      "Both are x and y are equal in value only",
      "Both are equal in the value and data type",
      "Both are not same at all",
    ],
    correctAnswer: "Both are equal in the value and data type",
  },
];
var currentIndex = 0;

function quizBegin() {
  startScreen.setAttribute("class", "hide");
  questionScreen.removeAttribute("class");
  startTimer();
  startQuestions();
}

function startTimer() {
  timer = setInterval(function () {
    timeCount--;
    timeElement.textContent = timeCount;
    if (timeCount <= 0) {
      endQuiz()
    }
  }, 1000);
}

function startQuestions() {
  questionTitle.textContent = questions[currentIndex].question;
  var answersAvailableTotel = questions[currentIndex].answers.length;

  questionAnswers.innerHTML = "";
  for (var i = 0; i < answersAvailableTotel; i++) {
    var button = document.createElement("button");
    button.textContent = questions[currentIndex].answers[i];
    button.onclick = checkAnswer;
    questionAnswers.appendChild(button);
  }
}

function checkAnswer() {
  var valueSelected = this.textContent;
  console.log(valueSelected);

  if (valueSelected === questions[currentIndex].correctAnswer) {
    alert("Correct");
    score += 5;
  } else {
    alert("Incorrect");
    timeCount -= 5;
    timeElement.textContent = timeCount;
  }
  currentIndex++;

  if (currentIndex === questions.length) {
    endQuiz();
  } else {
    startQuestions();
  }
}


function endQuiz() {
  questionScreen.setAttribute("class", "hide");
    var highscoreSection = document.getElementById("highscores-container");
    highscoreSection.removeAttribute("class");
    
    
}

function submitScore(){
    var initials = document.getElementById("initials");
    var scoreObject = {
        player: initials.value,
        finalScore: score
    }

    var storageHighscores = JSON.parse(window.localStorage.getItem("highscores")) || []; 
    storageHighscores.push(scoreObject); 
    window.localStorage.setItem("highscores", JSON.stringify(storageHighscores)); 

    var list = document.getElementById("highscores-list");
    for (var i = 0; i < storageHighscores.length; i++){
        var entry = document.createElement("li");
        entry.textContent = storageHighscores[i].player + " : " + storageHighscores[i].finalScore    ;
        list.appendChild(entry)
    }
}

submitScoreButton.addEventListener("click", submitScore);
startButton.addEventListener("click", quizBegin);
