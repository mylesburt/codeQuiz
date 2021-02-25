//Getting required elements
const startButton = document.querySelector(".startButton button");
const infoBox = document.querySelector(".infoBox");
const exitBtn = infoBox.querySelector(".buttons .quit");
const continueBtn = infoBox.querySelector(".buttons .restart");

//If Start Quiz button is clicked...
startButton.onclick = () => {
  infoBox.classList.add("activeInfo"); //Show info box
};

//If Exit button is clicked...
exitBtn.onclick = () => {
  infoBox.classList.remove("activeInfo"); //Hide info box
};

//Dev check to see if JS File is connected
console.log("Hello World");
