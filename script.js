const questions = [
  { question: "Capital Of Morocco Is Rabat ?", answer: true },
  { question: "Is the sky blue?", answer: true },
  { question: "Is water wet?", answer: true },
  { question: "Is the moon made of cheese?", answer: false },
];

const resultElement = document.getElementById("result");

const resetbtn = document.getElementById("reset");

let count = 0;

let currentQuestionIndex = 0;

function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  document.getElementById("question").textContent = currentQuestion.question;
  resultElement.style.visibility = "hidden";
  document.getElementById("qn").textContent = `N ${currentQuestionIndex + 1}`;
}

function checkAnswer(userAnswer) {
  const currentQuestion = questions[currentQuestionIndex];

  if (userAnswer === currentQuestion.answer) {
    resultElement.textContent = "Correct!";
    count++
    resultElement.style.color = "#3aa73a";
    resultElement.style.visibility = "visible";
  } else {
    resultElement.textContent = "Wrong!";
    resultElement.style.color = "#ff0000";
    resultElement.style.visibility = "visible";
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    setTimeout(() => {
      resultElement.textContent = "";
      displayQuestion();
    }, 2000);
  } else {
    setTimeout(() => {
      resultElement.textContent = "Quiz completed!";
      resultElement.style.color = "#ff0000";
      document.getElementById("question").style.display = "none";
      document.getElementById("answer").style.display = "none";
      document.getElementById("qn").style.display = "none";
      document.getElementById("resu").style.display = "block";
      document.getElementById("resu").textContent = `${count} Correct Answers`;
      
    }, 3000);
  }
}
displayQuestion();

function reset() {
  location.reload();
}
