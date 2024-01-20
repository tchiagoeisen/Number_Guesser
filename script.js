let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
  return Math.floor(Math.random() * 9)
}

function compareGuesses(human, computer, secret){
  let humanGuess = human - secret;
  let computerGuess = computer - secret;
  if(Math.abs(humanGuess) === Math.abs(computerGuess)){
    return true
    }
  else if (Math.abs(humanGuess) < Math.abs(computerGuess)){
    return true;
    } 
  else if (Math.abs(humanGuess) > Math.abs(computerGuess)){
    return false;
    } 
}

function updateScore(stringValue){
  if (stringValue === 'human')
    {humanScore += 1;}
  if (stringValue === 'computer')
    {computerScore += 1;}
}

function advanceRound(){
  currentRoundNumber += 1;
}
