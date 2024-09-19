// STEP 1: Write the logic to get the computer choice

console.log('Hello Shannon');

let computerScore = 0;
let humanScore = 0;

function getComputerChoice() {
  const choice = ['Rock', 'Paper', 'Scissors'];
  const randChoice = choice[Math.floor(Math.random() * choice.length)];
  return choice;

}

// STEP 2: Write the logic to get the human choice

function getHumanChoice() {
  let humanChoice = prompt('Do you choose Rock,Paper or Scissors?');
  if (humanChoice != 'Rock', 'Paper', 'Scissors'); {
    alert ('Invalid choice! Please choose Rock, Paper or Scissors');
    humanChoice = prompt('Do you choose Rock, Paper or Scissors?');
  }
}

// STEP 3: Declare the players score variables and initialize them with a value of 0
// These are global variables so I am placing them at the top 