//Getting required elements
const startButton = document.querySelector(".startButton button");
const infoBox = document.querySelector(".infoBox");
const exitBtn = infoBox.querySelector(".buttons .quit");
const continueBtn = infoBox.querySelector(".buttons .restart");
const quizBox = document.querySelector(".quizBox");
const optionList = document.querySelector(".optionList");

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

let tickIcon = `<div class="icon tick"><i class="fas fa-check"></i></div>`;
let crossIcon = `<div class="icon cross"><i class="fas fa-times"></i></div>`;

function optionSelected(answer) {
  let userAns = answer.textContent;
  let correctAns = questions[queCount].answer;
  let allOptions = optionList.children.length;
  if (userAns == correctAns) {
    answer.classList.add("correct");
    console.log("Answer is correct");
    answer.insertAdjacentHTML("beforeend", tickIcon);
  } else {
    answer.classList.add("incorrect");
    console.log("Answer is wrong");
    answer.insertAdjacentHTML("beforeend", crossIcon);
    //if answer is incorrect then automatcially select the correct answer
    for (let i = 0; i < allOptions; i++) {
      if (optionList.children[i].textContent == correctAns) {
        optionList.children[i].setAttribute("class", "option correct");
        optionList.children[i].insertAdjacentHTML("beforeend", tickIcon);
      }
    }
  }
  //once user selected, disbale all options
  for (let i = 0; i < allOptions; i++) {
    optionList.children[i].classList.add("disabled");
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
