var startButton = document.getElementById("start-btn");
var questionContainerElement = document.getElementById("question-container");
var questionElement = document.getElementById("question");
var quesionContainerEl = document.getElementById("question-container");
var hello = document.getElementById("intro");
var answerEl = document.getElementById("answer-click");
startButton.addEventListener("click", startQuiz);



function startQuiz() {
  startButton.classList.add("hide");
  quesionContainerEl.classList.remove("hide");
}

function question() {
  document.getElementById("answer-click").innerHTML = "";

}

  var questions = [
    {
      question: "What does Javascript mainly do?",
      answers: [
        "Adds color to a website",
        "Makes a website interactive",
        "Displays hard text on screen",
        "Makes website faster.",
      ],
      correctAnswer: "Makes a website interactive",
    },
    {
      question: "What is the most popular software to use for coding?",
      answers: ["notepad", "VScode", "vim", "Google"],
      correctAnswer: "VScode",
    },
    {
      question: "What tool uploads your website live?",
      answers: ["Git Pages", "Git Lab", "Google Pages", "Git Repository"],
      correctAnswer: "Git Pages",
    },
    {
      question: "What is the definition of CSS?",
      answers: [
        "Cascading Space Sheet",
        "Color style Sheet.",
        "Cascading Style Sheets",
        "Coding Style Sheet",
      ],
      correctAnswer: "Cascading Style Sheets",
    },
    {
      question: "Which tool can help push IDE work to Github?",
      answers: ["Git Lab", "Javascript", "Google Docs", "Git Bash"],
      correctAnswer: "Git Bash",
    },
  ];

function wrong() {}
function ending() {}
function timer() {}
function score() {}
