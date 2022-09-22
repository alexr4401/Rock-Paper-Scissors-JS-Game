function getComputerChoice() {
    let computerSelector = (Math.floor(Math.random() * 3));
    if (computerSelector === 0) {
        return 'rock';
    } else if (computerSelector === 1) {
        return 'paper';
    } else if (computerSelector === 2) {
        return 'scissors';
    }
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection === 'rock' & computerSelection === 'rock') {
        return 'It is a tie.';
    } else if (playerSelection === 'rock' & computerSelection === 'paper') {
        computerScore++;
        return 'You lose.';
    } else if (playerSelection === 'rock' & computerSelection === 'scissors') {
        userScore++;
        return 'You win!';
    } else if (playerSelection === 'paper' & computerSelection === 'paper') {
        return 'It is a tie';
    } else if (playerSelection === 'paper' & computerSelection === 'rock') {
        userScore++;
        return 'You win!';
    } else if (playerSelection === 'paper' & computerSelection === 'scissors') {
        computerScore++;
        return 'You lose.';
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return 'It is a tie.';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        userScore++;
        return 'You win!';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++;
        return 'You lose.';
    }
}



let userScore = parseInt(0);
let computerScore = parseInt(0);


for (let i = 0; i < 5; i++) {
let playerSelection = prompt('Choose: Rock, Paper, or Scissors');
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection))
console.log("your score = " + userScore);
console.log("Computer's score = " + computerScore);

}

