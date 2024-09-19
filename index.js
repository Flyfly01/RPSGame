// STEP 1: Write the logic to get the computer choice

console.log('Hello Shannon');

function getComputerChoice() {
  const choice = ['Rock', 'Paper', 'Scissors'];
  const randChoice = choice[Math.floor(Math.random() * choice.length)];
  return choice;

}
  
getComputerChoice();

// STEP 2: Write the logic to get the human choice

//const computerChoice = choices[randomChoice];
  //return computerChoice;
/*
  function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(randChoice);
  
*/