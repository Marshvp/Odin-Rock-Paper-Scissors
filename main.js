document.getElementById('Rock').addEventListener("click", () => oneGame("Rock"));
document.getElementById('Paper').addEventListener("click", () => oneGame("Paper"));
document.getElementById('Scissors').addEventListener("click", () => oneGame("Scissors"));

let playerScore = 0;
let computerScore = 0;

const container = document.querySelector('.container');
const resultul = document.createElement('ul');

    container.style.border = "1px black solid"
    
container.appendChild(resultul)



function getComputerChoice() {
    let answer = Math.floor(Math.random() * 3) + 1 

    if (answer == 1) {
        return "Rock"
    } else if (answer == 2) {
        return "Paper"
    } 
    return "Scissors"
}



function oneGame(playerChoice) {

    
    
    let computerChoice = getComputerChoice();
    let result = playRound(playerChoice, computerChoice)
    
    const resultli = document.createElement('li')
        resultli.textContent = result
        resultul.appendChild(resultli)

    if (result === "Win") {
        playerScore++
    } else if (result === "Lose") {
        computerScore++
    }
    console.log(`player score is ${playerScore}. Computer score is ${computerScore}.`);

    if (playerScore === 3 || computerScore === 3) {
        const finalResultli = document.createElement('li');
        finalResultli.textContent = playerScore === 3 ? "YOU WIN!" : "YOU LOSE!";
        resultul.appendChild(finalResultli);
    }

    
    console.log(result);
    
}



function playRound(playerChoice, computerChoice) {
    playerChoice = playerChoice.toLowerCase()
    computerChoice = computerChoice.toLowerCase()

   if (playerChoice == computerChoice){
       return "Tie"
   } else if ((playerChoice == "rock" && computerChoice == "scissors") ||
               (playerChoice == "paper" && computerChoice == "rock") ||
               (playerChoice == "scissors" && computerChoice == "paper")) {
                   return "Win";
               }
       else {
           return "Lose";
       }
};




/*function game() {
    let computerScore = 0;
    let playerScore = 0;

    while (playerScore < 3 && computerScore < 3) {
        let playerAnswer = getPlayerChoice().toLowerCase();
        let computerAnswer = getComputerChoice().toLowerCase();

        if (playerAnswer !== "rock" && playerAnswer !== "paper" && playerAnswer !== "scissors") {
            return "Not a valid answer";
        }

        let result = playRound(playerAnswer, computerAnswer);

        if (result === "Win") {
            console.log(`You Win! ${playerAnswer} beats ${computerAnswer}`);
            playerScore += 1;
        } else if (result === "Lose") {
            console.log(`You Lose! ${computerAnswer} beats ${playerAnswer}`);
            computerScore += 1;
        } else {
            console.log("It's a Tie!");
        }
    }

    if (playerScore === 3) {
        return `Game over. You won the game!`;
    } else {
        return `Game over. Computer won the game!`;
    }
} 

console.log(game()); */
