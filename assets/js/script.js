var questionContainerElement = document.getElementById("question-container");
var questionElement = document.getElementById("question");
var questionContainerEl = document.getElementById("question-container");
var hello = document.getElementById("intro");
var answerEl = document.getElementById("answer-click");
var startButton = document.getElementById("start-btn");

startButton.addEventListener("click", startQuiz);

function startQuiz() {
  startButton.classList.add("hide");
  questionContainerEl.classList.remove("hide");
  intro.classList.add("hide");
  displayQuestion();
}

  var questions = [
    {
      question: "What is the movie Heath Ledger won an Oscar for?",
      answers: [
        "BrokeBack Mountain",
        "The Dark Knight",
        "The Patriot",
        "Candy",
      ],
      correctAnswer: "The Dark Knight",
    },
    {
      question: "Who directed Django Unchained?",
      answers: [
      "Martin Scorsese", 
      "Steve Spielberg", 
      "George Lucas", 
      "Quentin Tarantino"],
      correctAnswer: "Quentin Tarantino",
    },
    {
      question: "How much Oscars does Robert Deniro have?",
      answers: [
      "1", 
      "2", 
      "3", 
      "4"],
      correctAnswer: "4",
    },
    {
      question: "Who is the Darth Vaders master?",
      answers: [
        "Grevious",
        "Yoda.",
        "Palpatine",
        "Obi Wan",
      ],
      correctAnswer: "Palpatine",
    },
    {
      question: "Which tool can help push IDE work to Github?",
      answers: ["Git Lab", "Javascript", "Google Docs", "Git Bash"],
      correctAnswer: "Git Bash",
    },
  ];

  function displayQuestion() {

 document.getElementById("question").textContent = questions[0].question;
 document.getElementById("answer-click").textContent = questions[0].answers;
 
 }

function wrong() {}
function ending() {}
function timer() {}
function score() {}
