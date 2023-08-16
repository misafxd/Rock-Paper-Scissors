function getComputerChoice() {
    let numChoice = Math.floor(Math.random() * 3);
    switch(numChoice){
        case 0: return "scissors"; 
        break;
        case 1: return "rock";
        break;
        case 2: return "paper";
        break;
    }
}


function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase();
    
    if (player == computerSelection){
        return `It's a tie ${player} vs ${computerSelection}`;
    }else if (player === "rock"){
        if(computerSelection == "scissors"){
            return `You win ${player} beats ${computerSelection}!!`
        } else {
            return `You lose ${computerSelection} beats ${player}!!`
        }
    }else if (player === "scissors"){
        if(computerSelection == "paper"){
            return `You win ${player} beats ${computerSelection}!!`
        } else {
            return `You lose ${computerSelection} beats ${player}!!`
        }
    }else if (player === "paper"){
        if(computerSelection == "rock"){
            return `You win ${player} beats ${computerSelection}!!`
        } else {
            return `You lose ${computerSelection} beats ${player}!!`
        }
    }

    
}

const pSelection = "rock";
const cSelection = getComputerChoice();

console.log(playRound(pSelection,cSelection));