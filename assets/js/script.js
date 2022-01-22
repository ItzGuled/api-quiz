var questionContainerElement = document.getElementById("question-container");
var questionElement = document.getElementById("question");
var questionContainerEl = document.getElementById("question-container");
var hello = document.getElementById("intro");
var answerEl = document.getElementById("answer-click");
var startButton = document.getElementById("start-btn");
var indexQuestion = 0

startButton.addEventListener("click", startQuiz);

function startQuiz() {
  startButton.classList.add("hide");
  questionContainerEl.classList.remove("hide");
  intro.classList.add("hide");
  displayQuestion();
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
      question: "Which Star Wars Movie is the best(This is not subjective)?",
      answers: ["Empire Strikes Back", 
      "Revenge of th Sith", 
      "Rise of Skywalker", 
      "New Hope"],
      correctAnswer: "Empire Strikes Back",
    },
  ];


  

  function displayQuestion() {
// turn number 81 to determine turn is gonna be
 
 var answerClick=document.getElementById("answer-click");
 var question=document.getElementById("question");

 
 
 while (answerClick.hasChildNodes()){
  answerClick.removeChild(answerClick.firstChild)
}


 var i=0
 while(i < 4){
  var listElement=document.createElement("li");
  listElement.textContent=questions[0].answers[i];
  answerClick.appendChild (listElement);
  
  i++
 }
 question.textContent= questions[0].question;
}
//  document.getElementById("ol").addEventListener("click", indexQuestion);

//  questions[indexQuestion].question; 
// }

// function evaluateAndIncrement(event) {
//   event.preventDefault() 
//    // eventually code in here will evaluate answers as well
//    myIndex++
//     displayQuestion();
// }


function wrong() {}
function ending() {}
function timer() {}
function score() {}
