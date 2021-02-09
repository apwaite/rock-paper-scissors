// initialise scores at 0
let playerScore = 0;
let computerScore = 0;

let userInput = "";

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.id === "rock") {
      userInput = button.id;
      playRound(userInput, computerPlay());
      console.log(userInput);
    } else if (button.id === "paper") {
      userInput = button.id;
      playRound(userInput, computerPlay());
      console.log(userInput);
    } else if (button.id === "scissors") {
      userInput = button.id;
      playRound(userInput, computerPlay());
      console.log(userInput);
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
    console.log("You tied!");
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    console.log("You lost the round! Paper beats Rock!");
    computerScore++;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log("You won the round! Paper beats Rock!");
    playerScore++;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    console.log("You lost the round! Scissors beats Paper!");
    computerScore++;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log("You won the round! Scissors beats Paper!");
    playerScore++;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    console.log("You lost the round! Rock beats Scissors!");
    computerScore++;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log("You won the round! Rock beats Scissors!");
    playerScore++;
  }
}

// Game function that plays 5 rounds and logs the result
function game() {
  // set number of rounds
  let roundNum = 5;

  for (let i = 0; i < roundNum; i++) {
    playRound();
    console.log(playerScore, `Player score: ${playerScore}`);
    console.log(computerScore, `Computer score ${computerScore}`);
  }

  if (playerScore > computerScore) {
    console.log(
      `You won the game! Player score: ${playerScore}. Computer score: ${computerScore}`
    );
  } else if (playerScore < computerScore) {
    console.log(
      `You lost the game! Player score: ${playerScore}. Computer score: ${computerScore}`
    );
  } else if (playerScore === computerScore) {
    console.log(`You tie!`);
  }
}
// game()
