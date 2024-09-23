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
    let round = 1;
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
            alert(`Round:${round} you won! ${humanChoice} beats ${computerChoice}`);
        }else if(roundStatus === 1) {
            alert(`Round:${round} you lost! ${computerChoice} beats ${humanChoice}`);
        } else {
            alert(`Round:${round} computer picked ${computerChoice} and you picked ${humanChoice}`)
        }
        console
        round++;        
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
        alert(`you won with ${humanScore} against the computer with ${computerScore} score`)
    }else if(computerScore > humanScore){
        alert(`the computer won with ${computerScore} against your score of ${humanScore} score`)
    }
}

playGame();


