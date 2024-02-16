let option = ["rock", "paper", "scissors"];
let computerScore = 0;
let playerScore = 0;
let tieScore = 0;

function getRndInteger() {
    return Math.floor(Math.random() * 3);
  }
function getComputerChoise (){
    let choise = getRndInteger();
    return option[choise];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection){
        tieScore ++;
        return `tie, you and the computer choose ${computerSelection}`;
    }
    else if (playerSelection=="rock" && computerSelection == "scissors")
    {
        playerScore++;
        return `you win, you choose ${playerSelection} and the computer choose ${computerSelection}`;
    }
    else if (playerSelection=="scissors" && computerSelection == "paper")
    {
        playerScore++;
        return `you win, you choose ${playerSelection} and the computer choose ${computerSelection}`;
    }
    else if (playerSelection=="paper" && computerSelection == "rock")
    {
        playerScore++;
        return `you win, you choose ${playerSelection} and the computer choose ${computerSelection}`;
    }
    else if (playerSelection=="rock" && computerSelection == "paper")
    {
        computerScore++;
        return `you lose, you choose ${playerSelection} and the computer choose ${computerSelection}`;
    }
    else if (playerSelection=="scissors" && computerSelection == "rock")
    {
        computerScore++;
        return `you lose, you choose ${playerSelection} and the computer choose ${computerSelection}`;
    }
    else if (playerSelection=="paper" && computerSelection == "scissors")
    {
        computerScore++;
        return `you lose, you choose ${playerSelection} and the computer choose ${computerSelection}`;
    }
}
g
function playGame(){
    for (i = 0; i< 5; i++){
        const playerSelection = prompt("chiose 'rock', 'paper' or 'scissors'").toLowerCase();
        const computerSelection = getComputerChoise();
        console.log(playRound(playerSelection, computerSelection));
    }
    return console.log(`the game is ${playerScore} to you and ${computerScore} to the computer and tie ${tieScore}`);
}


playGame()
