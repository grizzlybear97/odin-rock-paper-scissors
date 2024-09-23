let humanScore = 0;
let computerScore = 0;
let choiceArray = ['rock', 'paper', 'scissors'];

function getComputerChoice(){
    let choice = Math.floor(Math.random()*3)
    return choiceArray[choice]
}

function getHumanChoice(){
    let choice = prompt("Enter your choice:")
    choice = choice.toLowerCase();
    return choice;
}

function playRound(humanChoice, computerChoice){
    let roundStatus;
    if(roundStatus){
        console.log(`you won! ${humanChoice} beats computerChoice`);
    }else {
        console.log(`you lost! ${computerChoice} beats ${humanChoice}`);
    }
}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

