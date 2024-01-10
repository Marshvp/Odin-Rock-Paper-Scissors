function getComputerChoice() {
    let answer = Math.floor(Math.random() * 3) + 1 

    if (answer == 1) {
        return "Rock"
    } else if (answer == 2) {
        return "Paper"
    } 
    return "Scissors"
}


function getPlayerChoice() {
    let answer = prompt("Rock, Paper or Scissors");
    return answer
}



function playRound(playerAnswer, computerAnswer) {


    if (playerAnswer == computerAnswer){
        return "Tie"
    } else if ((playerAnswer == "rock" && computerAnswer == "scissors") ||
                (playerAnswer == "paper" && computerAnswer == "rock") ||
                (playerAnswer == "scissors" && computerAnswer == "paper")) {
                    return "Win";
                }
        else {
            return "Lose";
        }
};



function game() {
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

console.log(game());
