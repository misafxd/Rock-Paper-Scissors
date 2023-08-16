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

function getPlayerChoice(){
    const allowed = ["paper", "rock", "scissors"];
    let choice= "";
    
    while(!allowed.includes(choice)){
        prompt("Rock, Paper, Scissors!!!")
        choice = prompt("Choose an option: ")
        choice = choice.toLowerCase();
    }

    return choice;
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


function game(){
    let results = [];
    let player;
    let computer;

    for(let i = 1; i<=5; i++){
        player = getPlayerChoice();
        computer = getComputerChoice();
        console.log(playRound(player,computer));
        results.push(playRound(player,computer));
    }
    console.table(results);
}

game();

