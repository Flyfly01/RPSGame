console.log('Hello');

// STEP 1: Write the logic to get the computer choice
function getComputerChoice() {
  const choice = ['rock', 'paper', 'scissors'];
  const randChoice = choice[Math.floor(Math.random() * choice.length)];
  console.log (randChoice);
  return randChoice;

}

// STEP 2: Write the logic to get the human choice
function getHumanChoice() {
  let humanChoice = prompt('Do you choose Rock,Paper or Scissors?').toLowerCase();

  while (humanChoice !== 'rock' && humanChoice !== 'paper' && humanChoice !== 'scissors') {
    alert ('Invalid input! Please choose rock, paper or scissors')
    humanChoice = prompt('Do you choose Rock,Paper or Scissors?').toLowerCase();
  }

  return humanChoice;
}


function playGame() {

  let computerScore = 0;
  let humanScore = 0;

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
  
  for (let i=0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }

//Need to declare a winner
  if (humanScore > computerScore) {
    alert (`The winner is You! Your score: ${humanScore} Computer Score: ${computerScore}`);
  } else if (humanScore < computerScore) {
    alert (`The winner is Computer! Your score: ${humanScore} Computer Score: ${computerScore}`);
  } else {
    alert (`No winner! It's a tie! Your score: ${humanScore} Computer Score: ${computerScore}`);
  }

}

// Need to actually call the function for the game to play
playGame();
