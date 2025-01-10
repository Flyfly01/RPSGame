console.log('Hello');

let computerScore = 0;
let humanScore = 0;

const rockButton = document.querySelector ("#rock")
const paperButton = document.querySelector ("#paper")
const scissorsButton = document.querySelector ("#scissors")
const results = document.querySelector (".results")
const humanScoreSpan = document.querySelector (".human-score")
const computerScoreSpan = document.querySelector (".computer-score")


function getComputerChoice() {
  const choice = ['rock', 'paper', 'scissors'];
  const randChoice = choice[Math.floor(Math.random() * choice.length)];
  console.log (randChoice);
  return randChoice;
}


const playRound = (humanChoice, computerChoice) => {
    const p = document.createElement ("p");  
    if (humanChoice === 'rock' && computerChoice === 'scissors') {
      humanScore++;
      p.innerText = `Rock smashes scissors! Your point! Your score: ${humanScore} Computer Score: ${computerScore}`;
      results.appendChild(p);
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
      humanScore++;
      p.innerText = `Paper covers rock! Your point! Your score: ${humanScore} Computer Score: ${computerScore}`;
      results.appendChild(p);
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
      humanScore++;
      p.innerText = `Scissors cuts paper! Your point! Your score: ${humanScore} Computer Score: ${computerScore}`;
      results.appendChild(p);
    } else if (humanChoice === 'rock' && computerChoice === 'paper') {
      computerScore++;
      p.innerText = `Paper covers rock! Computer's point! Your score: ${humanScore} Computer Score: ${computerScore}`;
      results.appendChild(p);
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
      computerScore++;
      p.innerText = `Scissors cuts paper! Computer's point! Your score: ${humanScore} Computer Score: ${computerScore}`;
      results.appendChild(p);
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
      computerScore++;
      p.innerText = `Rock smashes scissors! Computer's point! Your score: ${humanScore} Computer Score: ${computerScore}`;
      results.appendChild(p);
    } else {
      p.innerText = `You draw! Your score: ${humanScore} Computer Score: ${computerScore}`;
      results.appendChild(p);
    }
  };


  const checkForWinner = (humanScore, computerScore) => {
    const h2 = document.createElement("h2");
    if (humanScore === 5) {
      h2.innerText = "Congratulations, you won the game!";
    } else if (computerScore === 5) { 
      h2.innerText = "Boo, you lost the game!";
    }
    results.appendChild(h2);
  }
  

  const updateScore = (humanScore, computerScore) => {
    humanScoreSpan.innerText = `Human Score: ${humanScore}`
    computerScoreSpan.innerText = `Computer Score: ${computerScore}`
  }


  rockButton.addEventListener ("click", () => {
    const computerChoice = getComputerChoice();
    const humanChoice = "rock";
    playRound (humanChoice, computerChoice);
    updateScore (humanScore, computerScore);
    checkForWinner(humanScore, computerScore);
  });

  paperButton.addEventListener ("click", () => {
    const computerChoice = getComputerChoice();
    const humanChoice = "paper";
    playRound (humanChoice, computerChoice);
    updateScore (humanScore, computerScore);
    checkForWinner(humanScore, computerScore);
  });

  scissorsButton.addEventListener ("click", () => {
    const computerChoice = getComputerChoice();
    const humanChoice = "scissors";
    playRound (humanChoice, computerChoice);
    updateScore (humanScore, computerScore);
    checkForWinner(humanScore, computerScore);
  });



