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
    if(choiceArray.includes(choice)){
        return choice;
    }else {
        alert('wrong input, try again')
        getHumanChoice();
    }
}

function playGame(){

  function playRound(humanChoice, computerChoice){
        
        let roundStatus;

        if(humanChoice === 'rock') {
            if(computerChoice === 'paper') {
                humanScore++;
                roundStatus = 0;
            } else if(computerChoice === 'scissors'){
                computerScore++;
                roundStatus = 1;
            }else {
                roundStatus = 2;
            }
        }
        if(humanChoice === 'paper') {
            if(computerChoice === 'rock') {
                humanScore++;
                roundStatus = 0;
            } else if(computerChoice === 'scissors'){
                computerScore++;
                roundStatus = 1;
            }else {
                roundStatus = 2;
            }
        }
        if(humanChoice === 'scissors') {
            if(computerChoice === 'paper') {
                humanScore++;
                roundStatus = 0;
            } else if(computerChoice === 'rock'){
                computerScore++;
                roundStatus = 1;
            }else {
                roundStatus = 2;
            }
        }

        if(roundStatus === 0){
            console.log(`you won! ${humanChoice} beats ${computerChoice}`);
        }else if(roundStatus === 1) {
            console.log(`you lost! ${computerChoice} beats ${humanChoice}`);
        } else {
            console.log(`computer picked ${computerChoice} and you picked ${humanChoice}`)
        }

        
    }
    for(let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    finalResult();
}

function finalResult(){
    if(humanScore > computerScore){
        console.log(`the human won with ${humanScore}`)
    }else if(computerScore > humanScore){
        console.log(`the computer won with ${computerScore}`)
    }
}

playGame();


