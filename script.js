function getComputerChoice() {
    const rand = Math.floor(Math.random() * 3)
    return rand === 0 ? "rock" : rand === 1 ? "paper" : "scissors";
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        resultsDiv.textContent = `Draw! You both chose ${humanChoice}.`
    } else if (
        humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper"
    ) {
        resultsDiv.textContent = `You win! ${humanChoice} beats ${computerChoice}.`
        humanScore++;
    } else {
        resultsDiv.textContent = `You lose! ${humanChoice} is beat by ${computerChoice}.`
        computerScore++;
    }
    resultsDiv.textContent += `, Your score: ${humanScore}, Computer score: ${computerScore}`
    if (humanScore === 5) {
        resultsDiv.textContent += `, You win with 5 points! You can still play if you want.`
    } else if (computerScore === 5) {
        resultsDiv.textContent += `, Computer wins with 5 points! You can still play if you want.`
    }
}

let humanScore = 0;
let computerScore = 0;
let round = 0;

const playerBtns = Array.from(document.getElementsByClassName("player-button"))
const resultsDiv = document.getElementById("results")

playerBtns.forEach(element => {
    element.addEventListener("click", (event) => {
        event.preventDefault()
        const humanSelection = event.target.value
        const computerSelection = getComputerChoice()
        playRound(humanSelection, computerSelection)
    })
});
