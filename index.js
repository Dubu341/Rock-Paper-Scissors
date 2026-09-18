function getComputerChoice() {
    const choices = ["rock" , "paper" , "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}


function getHumanChoice()  {
    return prompt("Rock, Paper, or Scissors:").toLowerCase();
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice) {

    if (humanChoice == computerChoice){
        return "TIE!";
    }
    else if (humanChoice === "paper" && computerChoice === "rock"){
       humanScore += 1
        return "You Win!"; 
    }
    else if (humanChoice === "rock" && computerChoice === "scissors"){
      humanScore += 1
        return "You Win!"; 
    }
    else if (humanChoice ===  "scissors" && computerChoice === "paper"){
      humanScore += 1
        return "You Win!"; 
    }
    else {
       computerScore += 1
        return "You Lose!"; 
    }
    
}

    for (let i = 0; i < 5; i += 1) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        console.log("You:", humanChoice)
        console.log("Computer:", computerChoice);
        console.log(playRound(humanChoice, computerChoice))
    }

        return `Final score: You ${humanScore} - Computer ${computerScore}`


}
  
  
console.log(playGame());









