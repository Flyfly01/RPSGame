// STEP 1: Write the logic to get the computer choice

console.log('Hello');

function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randChoice = choices[Math.floor(Math.random()*3)];
  const computerChoice = choices[randomChoice];
  return computerChoice;

  console.log(computerChoice)
}

