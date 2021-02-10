// initialise scores at 0
let playerScore = 0;
let computerScore = 0;
let currentRound = 0;

let userInput = "";

// select elements
const buttons = document.querySelectorAll("button");
const pscore = document.querySelector(".pscore");
const cscore = document.querySelector(".cscore");
const announce = document.querySelector(".winner");

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
  //select a random number between 1 and 3 and store it
  const randNum = Math.floor(Math.random() * 3) + 1;

  //if the random number the followon the roundg return: 1) Rock 2) Paper 3) Scissors
  if (randNum === 1) {
    return "rock";
  } else if (randNum === 2) {
    return "paper";
  } else if (randNum === 3) {
    return "scissors";
  }
}

// // Takes user input rock, paper or scissors and returns the value.
// function playerPlay() {
//   // Make user input lower case for comparison
//   let userInput = prompt(
//     "Please enter Rock, Scissors or Paper to play!"
//   ).toLowerCase();

//   while (
//     userInput !== "rock" &&
//     userInput !== "paper" &&
//     userInput !== "scissors"
//   ) {
//     let userInput = prompt(
//       "You did not enter a valid answer. Please enter Rock, Paper or Scissors"
//     ).toLowerCase();
//     if (
//       userInput === "rock" ||
//       userInput === "paper" ||
//       userInput === "scissors"
//     ) {
//       return userInput;
//     }
//   }
//   console.log(userInput);
//   return userInput;
// }
// Determines who won the rounds and adds to score
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
}

// Game function that plays 5 rounds and logs the result
function checkForWinner() {
  // set number of rounds
  let roundNum = 5;

  if (currentRound === roundNum && playerScore === computerScore) {
    announce.textContent = "It's a tie!";
  } else if (currentRound === roundNum && playerScore > computerScore) {
    announce.textContent = "Player wins!";
  } else if (currentRound === roundNum && playerScore < computerScore) {
    announce.textContent = "Computer wins!";
  }
}
