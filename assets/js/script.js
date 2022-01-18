const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')

startButton.addEventListener('click', startQuiz)

const myQuestions = [
    {
      question: "What does Javascript mainly do?",
      answers: {
        a: "Adds color to a website",
        b: "Makes a website interactive",
        c: "Displays hard text on screen",
        d: "Makes website faster."
      },
      correctAnswer: "b"
    },
    {
      question: "What is the most popular software to use for coding?",
      answers: {
        a: "notepad",
        b: "VScode",
        c: "vim",
        d: "Google"
      },
      correctAnswer: "b"
    },
    {
      question: "What tool uploads your website live?",
      answers: {
        a: "Git Pages",
        b: "Git Lab",
        c: "Google Pages",
        d: "Git Repository"
      },
      correctAnswer: "a"
    },
    {
    question: "What is the definition of CSS?",
    answers: {
      a: "Cascading Space Sheet",
      b: "Color style Sheet.",
      c: "Cascading Style Sheets",
      d: "Coding Style Sheet"
    },
    correctAnswer: "c"
  },
  {
    question: "Which tool can help push IDE work to Github?",
    answers: {
      a: "Git Lab",
      b: "Javascript",
      c: "Google Docs",
      d: "Git Bash"
    },
    correctAnswer: "d"
    }
  ];

  function startQuiz() {
    console.log('start')
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
   
  }
  function questions(){

  }
  function wrong() {

  }
  function ending() {

  }
  function timer() {

  }
  function score() {

  }

