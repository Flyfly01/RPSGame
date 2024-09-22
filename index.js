console.log('Hello');

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

// STEP 5: Write the logic to play the entire game which has 5 rounds. Keep track of scores and declare a winner. 

function playGame() {

  let computerScore = 0;
  let humanScore = 0;
  let round = 0;


  function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'rock' && computerChoice === 'scissors') {
      humanScore++;
      alert(`Rock smashes scissors! Your point! Your score: ${humanScore} Computer Score: ${computerScore}`);
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
      humanScore++;
      alert (`Paper covers rock! Your point! Your score: ${humanScore} Computer Score: ${computerScore}`);
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
      humanScore++;
      alert (`Scissors cuts paper! Your point! Your score: ${humanScore} Computer Score: ${computerScore}`);
    } else if (humanChoice === 'rock' && computerChoice === 'paper') {
      computerScore++;
      alert (`Paper covers rock! Computer's point! Your score: ${humanScore} Computer Score: ${computerScore}`);
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
      computerScore++;
      alert (`Scissors cuts paper! Computer's point! Your score: ${humanScore} Computer Score: ${computerScore}`);
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
      computerScore++;
      alert (`Rock smashes scissors! Computer's point! Your score: ${humanScore} Computer Score: ${computerScore}`);
    } else {
      alert (`You draw! Your score: ${humanScore} Computer Score: ${computerScore}`);
    }
  
  }
  
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
  

  //Declaring a winner
  function declareWinner() {
    if (humanScore > computerScore) {
      alert (`The winner is You! Your score: ${humanScore} Computer Score: ${computerScore}`);
    } else if (humanScore < computerScore) {
      alert (`The winner is Computer! Your score: ${humanScore} Computer Score: ${computerScore}`);
    } else {
      alert (`No winner! It's a tie! Your score: ${humanScore} Computer Score: ${computerScore}`);
    }
  }

}

// Need to actually call the function for the game to play
playGame();

