const questions = [
  {
    question: "What does HTML stand for?",
    answers: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks Text Makeup Language",
      "None of the above"
    ],
    correct: 0
  },

  {
  question: "Which HTML tag is used to create a hyperlink?",
  answers: ["<link>", "<a>", "<href>", "<url>"],
  correct: 1
  },
 {
  question: "Which attribute specifies an image source in HTML?",
  answers: ["href", "src", "alt", "title"],
  correct: 1
 },
 {
    question: "Which language is used for styling web pages?",
    answers: ["HTML", "CSS", "JavaScript", "Python"],
    correct: 1
  },
  {
  question: "Which CSS property controls the text size?",
  answers: ["font-size", "text-size", "size", "font-weight"],
  correct: 0
},
{
  question: "Which value is used for absolute positioning in CSS?",
  answers: ["relative", "fixed", "absolute", "sticky"],
  correct: 2
},

{
  question: "Which is the scripting language for web?",
  answers: ["Java", "C++", "JavaScript", "Ruby"],
  correct: 2
  },

 {
  question: "Which symbol is used for comments in JavaScript?",
  answers: ["//", "/* */", "#", "<!-- -->"],
  correct: 0
 },
 {
  question: "Which method is used to output data to the console?",
  answers: ["console.print()", "log.console()", "console.log()", "print.console()"],
  correct: 2
 },

  {
  question: "In React, which hook is used for managing state?",
  answers: ["useEffect", "useState", "useContext", "useReducer"],
  correct: 1
},
{
  question: "What is used to pass data to child components in React?",
  answers: ["props", "state", "data", "context"],
  correct: 0
 },   
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const answerButtons = document.querySelectorAll(".answer-btn");
const scoreElement = document.getElementById("score");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  scoreElement.textContent = "";
  restartBtn.style.display = "none";
  nextBtn.style.display = "inline-block";
  showQuestion();
}

function showQuestion() {
  const question = questions[currentQuestionIndex];
  questionElement.textContent = question.question;
  
  answerButtons.forEach((button, index) => {
    button.textContent = question.answers[index] || "";
    button.style.display = question.answers[index] ? "block" : "none";
    button.disabled = false;
    button.style.background = "#ddd";
  });
}

function checkAnswer(selectedIndex) {
  const correctIndex = questions[currentQuestionIndex].correct;
  
  if (selectedIndex === correctIndex) {
    score++;
    answerButtons[selectedIndex].style.background = "lightgreen";
  } else {
    answerButtons[selectedIndex].style.background = "salmon";
    answerButtons[correctIndex].style.background = "lightgreen";
  }
  
  answerButtons.forEach(button => button.disabled = true);
}

function nextQuestion() {
  currentQuestionIndex++;
  
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  questionElement.textContent = "Quiz Finished!";
  scoreElement.textContent = `Score: ${score} / ${questions.length}`;
  answerButtons.forEach(button => button.style.display = "none");
  nextBtn.style.display = "none";
  restartBtn.style.display = "inline-block";
}

function restartQuiz() {
  answerButtons.forEach(button => button.style.display = "block");
  startQuiz();
}

startQuiz();
