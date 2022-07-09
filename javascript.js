// function computerPlay(rock, paper, scissor) {
//   let rock = "rock";
//   let paper = "paper";
//   let scissor = "scissor";

//   if (rock === rock && paper === paper && scissor === scissor) {
//     console.log("Draw");
//   } else if (rock >= scissor) {
//     console.log("Winner");
//   }
// }
// computerPlay();

console.log("hello world");
let userInput = prompt("rock, paper, scissor");

function computerPlay() {
  let optionOne = "rock";
  let optionTwo = "paper";
  let optionThree = "scissor";

  let randomNum = Math.floor(Math.random() * 3);
  if (randomNum === 1) {
    return optionOne;
  } else if (randomNum === 2) {
    return optionTwo;
  } else return optionThree;
}
let computer = computerPlay();

function playRound(playerSelection, computerSelection) {
  // if computerplay selection is === to playselction output draw
  // if computeplay slecetion is > playerselection out loser
  //if computerplay slection is < playerselection out winner
  //how to connect computerplay to second function

  if (playerSelection === computerSelection) {
    return "Draw!";
  } else if (playerSelection === "rock" && computerSelection === "scissor") {
    return "You have won!";
  } else if (playerSelection === "scissor" && computerSelection === "rock") {
    return "You have lost!";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "You have lost!";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You have won!";
  } else if (playerSelection === "scissor" && computerSelection === "paper") {
    return "You have won!";
  } else if (playerSelection === "paper" && computerSelection === "scissor") {
    return "You have lost!";
  }
  console.log(playerSelection, computerSelection);
}
function game() {
  let win = 0;
  let loss = 0;
  let draw = 0;

  for (let i = 0; i < 3; i++) {
    console.log(playRound(userInput, computerPlay()));
    const result = playRound(userInput, computerPlay());

    if (result === "You have won!") {
      win++;
    } else if (result === "You have lost!") {
      loss++;
    } else if (result === "Draw!") {
      draw++;
    }
  }
  console.log(win);
  console.log(loss);
  console.log(draw);
}
game();
