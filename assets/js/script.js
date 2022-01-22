var questionElement = document.getElementById("question");
var questionContainerEl = document.getElementById("question-container");
var hello = document.getElementById("intro");
var results =document.getElementById("results")
var answerEl = document.getElementById("answer-click");
var startButton = document.getElementById("start-btn");
var indexQuestion = 0;
var score = 0;
var timing = 0;
var clear = undefined
startButton.addEventListener("click", startQuiz);

function startQuiz() {
  startButton.classList.add("hide");
  questionContainerEl.classList.remove("hide");
  intro.classList.add("hide");
  displayQuestion();
  displayQuestion();
  timer();
  score = 0;
}

var questions = [
  {
    question: "What is the movie Heath Ledger won an Oscar for?",
    answers: ["BrokeBack Mountain", "The Dark Knight", "The Patriot", "Candy"],
    correctAnswer: "The Dark Knight",
  },
  {
    question: "Who directed Django Unchained?",
    answers: [
      "Martin Scorsese",
      "Steve Spielberg",
      "George Lucas",
      "Quentin Tarantino",
    ],
    correctAnswer: "Quentin Tarantino",
  },
  {
    question: "How much Oscars does Robert Deniro have?",
    answers: ["1", "2", "3", "4"],
    correctAnswer: "4",
  },
  {
    question: "Who is the Darth Vaders master?",
    answers: ["General Grievous", "Yoda.", "Palpatine", "Obi Wan"],
    correctAnswer: "Palpatine",
  },
  {
    question: "Which Star Wars Movie is the best(This is not subjective)?",
    answers: [
      "Empire Strikes Back",
      "Revenge of the Sith",
      "Rise of Skywalker",
      "New Hope",
    ],
    correctAnswer: "Empire Strikes Back",
  },
];

function displayQuestion() {
  if (indexQuestion >= questions.length) {
    ending();
  } else {
    var answerClick = document.getElementById("answer-click");
    var question = document.getElementById("question");

    while (answerClick.hasChildNodes()) {
      answerClick.removeChild(answerClick.firstChild);
    }

    var i = 0;
    while (i < 4) {
      var listElement = document.createElement("li");
      listElement.textContent = questions[indexQuestion].answers[i];
      listElement.onclick = evaluateAndIncrement;
      answerClick.appendChild(listElement);

      i++;
    }
    question.textContent = questions[indexQuestion].question;
  }
}

function evaluateAndIncrement(event) {
  event.preventDefault();

  if (questions[indexQuestion].correctAnswer === event.target.innerHTML) {
    score++;
  }
  indexQuestion++;
  displayQuestion();
}

function ending() {
  questionContainerEl.classList.add("hide");
  results.classList.remove("hide");

}
function timer() {
  let timerElement = document.querySelector("#timer > span")
  let timerValue = timerElement.textContent
  timing = parseInt(timerValue)
  console.log("timer element", timerValue)
  clear = setInterval(function() {
  if (timing < 0){
  clearInterval(refreshIntervalId);
  }
  document.querySelector("#timer > span").textContent = timing--

  },1000)
}
function score() {}
