function getComputerChoice() {
    const choices = ["rock" , "paper" , "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}


function getHumanChoice()  {
    let sign = prompt("Rock, Paper, or Scissors:");
    let input = sign.trim().toLowerCase();
    return input;
}

const humanScore = 0;
const computerScore = 0;

function playRound(humanChoice, computerChoice) {

    if (humanChoice == computerChoice){
        console.log("TIE!")
    }
    else if (humanChoice === "paper" && computerChoice === "rock"){
        console.log("You Win!");
    }
    else if (humanChoice === "rock" && computerChoice === "scissors"){
        console.log("You Win!");
    }
    else if (humanChoice ===  "scissors" && computerChoice === "paper"){
        console.log("You Win!");
    }
    else {
        console.log ("You Lose!")
    }
}

    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    console.log("You:", humanChoice)
    console.log("Computer:", computerChoice);
    playRound(humanChoice, computerChoice);
