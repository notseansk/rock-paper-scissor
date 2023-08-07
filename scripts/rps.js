let result = "";
let moves = "";
let computerMove = "";

let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};
const scoreElement = document.querySelector(".score-class");
const resultElement = document.querySelector(".result-class");
const movesElement = document.querySelector(".moves-class");
const rockButtonElement = document.querySelector(".btn-rock");
const paperButtonElement = document.querySelector(".btn-paper");
const scissorsButtonElement = document.querySelector(".btn-scissors");
updateScore();
function updateScore() {
  scoreElement.innerHTML = `Wins:${score.wins}, Losses:${score.losses}, Ties:${score.ties}`;
}
function updateResult() {
  resultElement.innerHTML = `${result}`;
}
function updateMoves(moveTemp) {
  movesElement.innerHTML = `You <img class="move-left" src="./assets/${moveTemp}-emoji.png" /><img class="move-right"
        src="./assets/${computerMove}-emoji.png"
      />
      Computer`;
}
function pickComputerMove() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    computerMove = "Rock";
  } else if (randomNumber === 2) {
    computerMove = "Paper";
  } else if (randomNumber === 3) {
    computerMove = "Scissors";
  }
}
function scoreIncrease() {
  if (result === "You Win") {
    score.wins += 1;
  } else if (result === "You Lose") {
    score.losses += 1;
  } else if (result === "Tie") {
    score.ties += 1;
  }
}
function winnerChecker(playerMove) {
  if (playerMove === computerMove) {
    result = "Tie";
  } else if (playerMove === "Paper" && computerMove === "Scissors") {
    result = "You Lose";
  } else if (playerMove === "Paper" && computerMove === "Rock") {
    result = "You Win";
  } else if (playerMove === "Rock" && computerMove === "Scissors") {
    result = "You Win";
  } else if (playerMove === "Rock" && computerMove === "Paper") {
    result = "You Lose";
  } else if (playerMove === "Scissors" && computerMove === "Paper") {
    result = "You Win";
  } else if (playerMove === "Scissors" && computerMove === "Rock") {
    result = "You Lose";
  }
}
function playGame(playerMove) {
  pickComputerMove();
  winnerChecker(playerMove);
  scoreIncrease();
  localStorage.setItem("score", JSON.stringify(score));
  updateScore();
  updateResult();
  updateMoves(playerMove);
}
