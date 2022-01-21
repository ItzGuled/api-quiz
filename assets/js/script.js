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

  function question() {
    question.innerText = questions[currentQuestionIndex].title;
   ;
 
 }

function wrong() {}
function ending() {}
function timer() {}
function score() {}
