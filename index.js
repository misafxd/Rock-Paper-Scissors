const buttons = document.querySelectorAll('.btn');
const score = document.querySelector('.score');
const p = document.createElement('p');
score.appendChild(p);
const winner = document.createElement('h2');
score.insertBefore(winner, p);
const reStart = document.createElement('button');
reStart.classList.add('re-start');

reStart.addEventListener('click', () => {
    playerResults = 0;
    computerResults = 0;
    winner.textContent = '';
    p.textContent = '';
    score.removeChild(reStart);
})

let choice = '';
let playerResults = 0;
let computerResults = 0;

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
            playerResults++;
            return `You win ${player} beats ${computerSelection}!!`
        } else {
            computerResults++;
            return `You lose ${computerSelection} beats ${player}!!`
        }
    }else if (player === "scissors"){
        if(computerSelection == "paper"){
            playerResults++;
            return `You win ${player} beats ${computerSelection}!!`
        } else {
            computerResults++;
            return `You lose ${computerSelection} beats ${player}!!`
        }
    }else if (player === "paper"){
        if(computerSelection == "rock"){
            playerResults++;
            return `You win ${player} beats ${computerSelection}!!`
        } else {
            computerResults++;
            return `You lose ${computerSelection} beats ${player}!!`
        }
    }
}

function showWinner(computerResults, playerResults) {
    if (computerResults == 5 ){
        winner.textContent = 'Computer have won 5 rounds!!!';
        score.appendChild(reStart);
    } 
    if (playerResults == 5){
        winner.textContent = 'You have won 5 rounds';
        score.appendChild(reStart);
    }
    
}

function game(choice){  
    let player = choice;
    let computer = getComputerChoice();
    p.textContent = `${playRound(player,computer)}`
    
}

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        choice = btn.getAttribute('id');
        game(choice);
        showWinner(computerResults,playerResults);      
    });
});





