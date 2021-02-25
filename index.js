//Getting required elements
const startButton = document.querySelector(".startButton button");
const infoBox = document.querySelector(".infoBox");
const exitBtn = infoBox.querySelector(".buttons .quit");
const continueBtn = infoBox.querySelector(".buttons .restart");
const quizBox = document.querySelector(".quizBox");

//If Start Quiz button is clicked...
startButton.onclick = () => {
  infoBox.classList.add("activeInfo"); //Show info box
};

//If Exit button is clicked...
exitBtn.onclick = () => {
  infoBox.classList.remove("activeInfo"); //Hide info box
};

//If Continue button is clicked...
continueBtn.onclick = () => {
  infoBox.classList.remove("activeInfo"); //Hide info box
  quizBox.classList.add("activeQuiz"); //Show quiz box
  showQuestions(0);
  queCounter(1);
};

let queCount = 0;
let queNumb = 1;

const nextBtn = quizBox.querySelector(".nextBtn");

//If Next button clicked...
nextBtn.onclick = () => {
  if (queCount < questions.length - 1) {
    queCount++;
    queNumb++;
    showQuestions(queCount);
    queCounter(queNumb);
  } else {
    console.log("Questions completed.");
  }
};

//Getting questions and options from array
function showQuestions(index) {
  const queText = document.querySelector(".queText");
  const optionList = document.querySelector(".optionList");
  let queTag =
    "<span>" +
    questions[index].numb +
    ". " +
    questions[index].question +
    "</span>";
  let optionTag =
    `<div class="option">` +
    questions[index].options[0] +
    `<span></span></div>` +
    `<div class="option">` +
    questions[index].options[1] +
    `<span></span></div>` +
    `<div class="option">` +
    questions[index].options[2] +
    `<span></span></div>` +
    `<div class="option">` +
    questions[index].options[3] +
    `<span></span></div>`;
  queText.innerHTML = queTag;
  optionList.innerHTML = optionTag;
  const option = optionList.querySelectorAll(".option");
  for (let i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "optionSelected(this)");
  }
}

function optionSelected(answer) {
  let userAns = answer.textContent;
  let correctAns = questions[queCount].answer;
  if (userAns == correctAns) {
    answer.classList.add("correct");
    console.log("Answer is correct");
  } else {
    answer.classList.add("incorrect");
    console.log("Answer is wrong");
  }
}

function queCounter(index) {
  const bottomQuesCounter = quizBox.querySelector(".totalQue");
  let totalQuestCountTag =
    `<span><p>` +
    index +
    `</p>of<p>` +
    questions.length +
    `</p>questions</span>`;
  bottomQuesCounter.innerHTML = totalQuestCountTag;
}

//Dev check to see if JS File is connected
console.log("Hello World");
