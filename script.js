// Initialise scores at 0
let playerScore = 0;
let computerScore = 0;
let currentRound = 0;

let userInput = "";

// Select and store elements from GUI
const buttons = document.querySelectorAll("button");
const pscore = document.querySelector(".pscore");
const cscore = document.querySelector(".cscore");
const announce = document.querySelector(".winner");
const round = document.querySelector(".round");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.id === "rock") {
      userInput = button.id;
      playRound(userInput, computerPlay());
      updateScore();
      checkForWinner();
    } else if (button.id === "paper") {
      userInput = button.id;
      playRound(userInput, computerPlay());
      updateScore();
      checkForWinner();
    } else if (button.id === "scissors") {
      userInput = button.id;
      playRound(userInput, computerPlay());
      updateScore();
      checkForWinner();
    }
  });
});

// Randomly select an option for the computer and return it
function computerPlay() {
  // Select a random number between 1 and 3 and store it
  const randNum = Math.floor(Math.random() * 3) + 1;

  // If the random number the followon the roundg return: 1) Rock 2) Paper 3) Scissors
  if (randNum === 1) {
    return "rock";
  } else if (randNum === 2) {
    return "paper";
  } else if (randNum === 3) {
    return "scissors";
  }
}

// Determines who won a single round, adds to score and adds +1 to currentRound
function playRound(playerSelection, computerSelection) {
  computerSelection = computerPlay();
  playerSelection = userInput;

  if (playerSelection === computerSelection) {
    announce.textContent = "You tied!";
    currentRound++;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    announce.textContent = "You lost the round! Paper beats Rock!";
    computerScore++;
    currentRound++;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    announce.textContent = "You won the round! Paper beats Rock!";
    playerScore++;
    currentRound++;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    announce.textContent = "You lost the round! Scissors beats Paper!";
    computerScore++;
    currentRound++;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    announce.textContent = "You won the round! Scissors beats Paper!";
    playerScore++;
    currentRound++;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    announce.textContent = "You lost the round! Rock beats Scissors!";
    computerScore++;
    currentRound++;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    announce.textContent = "You won the round! Rock beats Scissors!";
    playerScore++;
    currentRound++;
  }
}

function updateScore() {
  pscore.textContent = `${playerScore}`;
  cscore.textContent = `${computerScore}`;
  round.textContent = `${currentRound}`;
}

function disableButtons() {
  document.getElementById("rock").disabled = true;
  document.getElementById("paper").disabled = true;
  document.getElementById("scissors").disabled = true;
}

// Game function that plays a set number of rounds and displays the result
function checkForWinner() {
  // Set number of rounds
  let roundNum = 5;

  if (currentRound === roundNum && playerScore === computerScore) {
    announce.textContent = "It's a tie! Nobody wins!";
    disableButtons();
  } else if (currentRound === roundNum && playerScore > computerScore) {
    announce.textContent = "Congratulations! You won!";
    disableButtons();
  } else if (currentRound === roundNum && playerScore < computerScore) {
    announce.textContent = "Commiserations! The computer wins!";
    disableButtons();
  }
}
