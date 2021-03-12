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
  },
  {
    question: "The function and  var are known as",
    asnwers: ["Key words", "Data types", "Decleration statements", "Prototype"],
    correctAnswer: "Decleration statement",
  }
  {
      question: " In JavaScript the x===y statement implies that:",
      answers: ["Both x and y are equal in value, type and reference address as well", "Both are x and y are equal in value only","Both are equal in the value and data type","Both are not same at all"],
      correctAnswer: "Both are equal in the value and data type", 
    }
];
var currentIndex = 0;

function quizBegin() {
  startScreen.setAttribute("class", "hide");
  questionScreen.removeAttribute("class");

  //start the timer
  //set the value of the time-remaining to the timer value
  //introduct the first question to the user via another function call (startQuestions)
  startQuestions();
}

function setTime() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + "Go you";
    
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
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
  } else {
    alert("Incorrect");
    //when implementing timer - incorrect will result in loss of time
  }
  currentIndex++;

  if (currentIndex === questions.length) {
    endQuiz();
  } else {
    startQuestions();
  }
}

function endQuiz() {
  // hide questions section
  // reveal highsocores / add your highscore section
  // input box and button which added score and initials to local storage
}
 startButton.onclick = quizBegin()
