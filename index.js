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
};

let queCount = 0;

const nextBtn = quizBox.querySelector(".nextBtn");

//If Next button clicked...
nextBtn.onclick = () => {
  queCount++;
  showQuestions(queCount);
};

//Getting questions and options from array
function showQuestions(index) {
  const queText = document.querySelector(".queText");
  const optionList = document.querySelector(".optionList");
  let queTag = "<span>" + questions[index].question + "</span>";
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
}

//Dev check to see if JS File is connected
console.log("Hello World");
