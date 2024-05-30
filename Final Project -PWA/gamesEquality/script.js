const questionContainer = document.getElementById("question-container");
const answerButtonsElement = document.getElementById("answer-buttons");
const questionNumberElement = document.getElementById("question-number");
const scoreElement = document.getElementById("score");
const streakElement = document.getElementById("streak");
const viewAnswersBtn = document.getElementById("view-answers-btn");
const restartBtn = document.getElementById("restart-btn");
const correctSound = document.getElementById("correct-sound");
const wrongSound = document.getElementById("wrong-sound");
const backgroundMusic = document.getElementById("background-music");

let shuffledQuestions,
  currentQuestionIndex,
  score,
  correctStreak,
  answeredQuestions;

startGame();

function startGame() {
  shuffledQuestions = questions.sort(() => Math.random() - 0.5).slice(0, 10);
  currentQuestionIndex = 0;
  score = 0;
  correctStreak = 0;
  answeredQuestions = [];
  viewAnswersBtn.style.display = "none";
  restartBtn.style.display = "none";
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionNumberElement.innerText = `Question ${
    currentQuestionIndex + 1
  } of 10`;
  questionContainer.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct === "true";
  answeredQuestions.push({
    question: shuffledQuestions[currentQuestionIndex],
    selected: selectedButton.innerText,
    correct: correct,
  });

  if (correct) {
    score++;
    correctStreak++;
    selectedButton.classList.add("correct");
    correctSound.play();
  } else {
    correctStreak = 0;
    selectedButton.classList.add("wrong");
    wrongSound.play();
    Array.from(answerButtonsElement.children).forEach((button) => {
      if (button.dataset.correct === "true") {
        button.classList.add("correct-answer");
      }
    });
  }
  scoreElement.innerText = score;
  streakElement.innerText = correctStreak;

  setTimeout(() => {
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      currentQuestionIndex++;
      setNextQuestion();
    } else {
      showResults();
    }
  }, 1000); // Delay for 1 second before next question
}

function showResults() {
  questionContainer.innerText = `Quiz Completed! Your score: ${score} / 10`;
  resetState();
  viewAnswersBtn.style.display = "inline-block";
  restartBtn.style.display = "inline-block";
  backgroundMusic.play();
}

viewAnswersBtn.addEventListener("click", toggleAnswers);
restartBtn.addEventListener("click", () => {
  backgroundMusic.pause();
  backgroundMusic.currentTime = 0;
  startGame();
});

function toggleAnswers() {
  const showAnswers = viewAnswersBtn.innerText === "View Answers";
  if (showAnswers) {
    viewAnswersBtn.innerText = "Hide Answers";
    showAllAnswers();
  } else {
    viewAnswersBtn.innerText = "View Answers";
    hideAllAnswers();
  }
}

function showAllAnswers() {
  answerButtonsElement.classList.add("view-answers"); // Add this class for viewing answers
  resetState();
  answeredQuestions.forEach((item, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.innerText = `Q${index + 1}: ${item.question.question}`;
    questionDiv.classList.add("question-div"); // Add class for styling
    answerButtonsElement.appendChild(questionDiv);

    item.question.answers.forEach((answer) => {
      const button = document.createElement("button");
      button.innerText = answer.text;
      button.classList.add("btn");
      if (answer.text === item.selected) {
        button.classList.add(answer.correct ? "correct" : "wrong");
      }
      if (answer.correct) {
        button.classList.add("correct-answer");
      }
      answerButtonsElement.appendChild(button);
    });
  });
}

function hideAllAnswers() {
  answerButtonsElement.classList.remove("view-answers"); // Remove this class when hiding answers
  resetState();
}
