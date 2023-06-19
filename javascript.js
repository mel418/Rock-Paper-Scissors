function getComputerChoice() {
    const choice = ['Rock', 'Paper', 'Scissor'] 
    const randomChoice = Math.floor(Math.random() * choice.length)
    return(choice[randomChoice])
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection.toLowerCase() == 'rock') {
        if(computerSelection.toLowerCase() == 'paper') {
            return("You Lose! Paper beats Rock")
        }
        if(computerSelection == 'rock') {
            return("It's a draw! Rock against Rock")
        }
        else {
            return("You Win! Rock beats Scissors")
        }
    }

    if(playerSelection.toLowerCase() == 'paper') {
        if(computerSelection.toLowerCase() == 'scissor') {
            return("You Lose! Scissor beats Paper")
        }
        if(computerSelection == 'paper') {
            return("It's a draw! Paper against Paper")
        }
        else {
            return("You Win! Paper beats Rock")
        }
    }

    if(playerSelection.toLowerCase() == 'scissor') {
        if(computerSelection.toLowerCase() == 'rock') {
            return("You Lose! Rock beats Scissor")
        }
        if(computerSelection == 'scissor') {
            return("It's a draw! Scissor against Scissor")
        }
        else {
            return("You Win! Scissor beats Paper")
        }
    }
    
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Select if you dare: rock, paper, scissor');
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}
game()