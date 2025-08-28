function getComputerChoice() {
    const rand = Math.floor(Math.random() * 3)
    return rand === 0 ? "rock" : rand === 1 ? "paper" : "scissors";
}

function getHumanChoice() {
    return prompt("Input choice of either rock, paper, or scissors:");
}

function playGame() {

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log(`Draw! You both chose ${humanChoice}.`)
        } else if (
            humanChoice === "rock" && computerChoice === "scissors" ||
            humanChoice === "paper" && computerChoice === "rock" ||
            humanChoice === "scissors" && computerChoice === "paper"
        ) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`)
            humanScore++;
        } else {
            console.log(`You lose! ${humanChoice} is beat by ${computerChoice}.`)
            computerScore++;
        }
    }
    
    let humanScore = 0;
    let computerScore = 0;
    let round = 0;
    humanScore = 0;
    computerScore = 0;
    while (round < 5) {
        round++
        const humanSelection = getHumanChoice().toLowerCase();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection)
    }
    console.log(`Final scores:`)
    console.log(`Human: ${humanScore}`)
    console.log(`Computer: ${computerScore}`)
}

playGame()