console.log('Hello');

let computerScore = 0;
let humanScore = 0;

// STEP 1: Write the logic to get the computer choice

function getComputerChoice() {
  const choice = ['rock', 'paper', 'scissors'];
  const randChoice = choice[Math.floor(Math.random() * choice.length)];
  console.log (randChoice);
  return randChoice;

}

//getComputerChoice();

// STEP 2: Write the logic to get the human choice

function getHumanChoice() {
  let humanInput = prompt('Do you choose Rock,Paper or Scissors?');
  let humanChoice = humanInput.toLowerCase();
  return humanChoice;
}

//getHumanChoice(); 

// STEP 3: Declare the players score variables and initialize them with a value of 0 

// STEP 4: Write the logic to play a single round

function playRound(humanChoice, computerChoice) {
  if (humanChoice === 'rock' && computerChoice === 'scissors') {
    alert("Rock smashes scissors! You WIN!");
    humanScore++;
  } else if (humanChoice === 'paper' && computerChoice === 'rock') {
    alert ("Paper covers rock! You WIN!");
    humanScore++;
  } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
    alert ("Scissors cuts paper! You WIN!");
    humanScore++;
  } else if (humanChoice === 'rock' && computerChoice === 'paper') {
    alert ("Paper covers rock! You LOSE!");
    computerScore++;
  } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
    alert ("Scissors cuts paper! You LOSE!");
    computerScore++;
  } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
    alert ("Rock smashes scissors! You LOSE!");
    computerScore++;
  } else {
    alert ("You draw!");
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);


  

