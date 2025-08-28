function getComputerChoice() {
    const rand = Math.floor(Math.random() * 3)
    return rand === 0 ? "rock" : rand === 1 ? "paper" : "scissors";
}

function getHumanChoice() {
    return prompt("Input choice of either rock, paper, or scissors:");
}
