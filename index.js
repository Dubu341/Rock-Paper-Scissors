//function getHumanChoice() {
//  return prompt("Rock, Paper, or Scissors:").toLowerCase();
//}

function playGame() {
  function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
      return "TIE!";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      humanScore += 1;
      return "You Win!";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      humanScore += 1;
      return "You Win!";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      humanScore += 1;
      return "You Win!";
    } else {
      computerScore += 1;
      return "You Lose!";
    }
  }

  let buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const computerChoice = getComputerChoice();
      const humanChoice = button.className;
      playRound;
      const results = document.querySelector(".results");

      let userInput = document.createElement("p");
      userInput.textContent = `You: ${humanChoice}`;
      results.appendChild(userInput);

      let computerInput = document.createElement("p");
      computerInput.textContent = `Computer: ${computerChoice}`;
      results.appendChild(computerInput);

      let gameResult = document.createElement("p");
      gameResult.textContent = `Round result: ${playRound(humanChoice, computerChoice)}`;
      results.appendChild(gameResult);

      let runningScore = document.createElement("p");
      runningScore.textContent = `Your score: ${humanScore} / Computer score: ${computerScore}`;
      results.appendChild(runningScore);
    });
  });
  //  const humanChoice = getHumanChoice();

  if (humanScore > computerScore) {
    return `YOU WON!  Final score: You ${humanScore} - Computer ${computerScore}`;
  } else if (humanScore < computerScore) {
    return `YOU LOST!  Final score: You ${humanScore} - Computer ${computerScore}`;
  } else {
    return `IT'S A TIE!  Final score: You ${humanScore} - Computer ${computerScore}`;
  }
}

console.log(playGame());
