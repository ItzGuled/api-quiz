var generateBtn = document.querySelector("#generate");
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
//   HTML tips:
//   So for this project we will be able to dynamically update the html with questions and answers from our myQuestions variable. But we are going to need to hard code some elements so we can target them. So far you currently have a start button with an id ‘start-btn’ which is great for starting the quiz. You also have a a div witht he id ‘results’ which can be used at the end to show the users results. But in between there we should consider adding
//   • a div for questions
//      ◦ which then had an element for the question-title
//      ◦ and an element for the choices
//      ◦ This will allow you to dynamically update the html and append new elements to these hardcoded elements
//   • You can consider adding a section/div in your htlm for the end screen as well.