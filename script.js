const choices = ["rock", "paper", "scissors"];

  function getComputerChoice() { 
    const randomIndex = Math.floor(Math.random() * choices.length);
    const randomChoice = choices[randomIndex];
    return randomChoice;
  }

  function getPlayerChoice() {
    const playerInput = prompt("Enter your choice: rock, paper, or scissors", "").toLowerCase();
    if (choices.includes(playerInput)) {
      return playerInput;
    } else {
      alert("Invalid input. Please enter rock, paper, or scissors.");
      return getPlayerChoice();
    }
  }
  
  function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
      return "It's a tie!";
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      return "You win!";
    } else {
      return "Computer wins!";
    }
  }
  
  function game() {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    alert("You chose: " + playerSelection);
    alert("Computer chose: " + computerSelection);
    alert(playRound(playerSelection, computerSelection));
  }
  
  game();
  
