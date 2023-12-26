//selecting all classes with class name users-moves
const allUserMoves = document.querySelectorAll(".user-move");
const userSide = document.querySelector("#user-side");
const botsSide = document.querySelector("#bots-side");
const resultDisplay = document.querySelector("#result-display");
const displayUserMove = document.querySelector("#display-user-move");
const displayBotsMove = document.querySelector("#display-bots-move");
const resetBtn = document.querySelector("#reset-btn");

//finding move id when click event is performed in loop and giving value to displayUserMove which displays choosen move in the game and passing user move value to botsTurn function.
allUserMoves.forEach((move) => {
  move.addEventListener("click", () => {
    const userMove = move.getAttribute("id");
    displayUserMove.setAttribute("src", userMove + ".png");
    // console.log("You have choosed " + userMove);
    botsTurn(userMove);
  });
});

//receiving user move and generating bots move by randomizing index and giving value to displayBotsMove which displays choosen move in the game and passing both user move and bots move to decider function.
const botsTurn = (userMove) => {
  const allBotMoves = ["rock", "paper", "scissor"];
  const randomizer = Math.floor(Math.random() * 3);
  const botsMove = allBotMoves[randomizer];
  displayBotsMove.setAttribute("src", botsMove + ".png");
  // console.log(`Bot has choosen ${botsMove}`);
  decider(userMove, botsMove);
};

//function made to change whenever the game decision is made
const winChanges = (winner) => {
  if (winner === true) {
    resultDisplay.innerText = "You Won!!!";
    userSide.style.backgroundColor = "rgb(18, 252, 18)";
    botsSide.style.backgroundColor = "rgb(238, 85, 85)";
  } else if (winner === false) {
    resultDisplay.innerText = "Bot won!!! Try again!!!";
    botsSide.style.backgroundColor = "rgb(255, 44, 44)";
    userSide.style.backgroundColor = " rgb(95, 240, 95)";
  } else {
    resultDisplay.innerText = "Draw!!! Try again!!!";
    botsSide.style.backgroundColor = "rgb(238, 85, 85)";
    userSide.style.backgroundColor = " rgb(95, 240, 95)";
  }
};

//receiving both user move and bots move and finding the winer using if else condition.
const decider = (userMove, botsMove) => {
  console.log(`You have choosen ${userMove}`);
  console.log(`Bot has choosen ${botsMove}`);
  if (
    (userMove === "rock" && botsMove === "scissor") ||
    (userMove === "paper" && botsMove === "rock") ||
    (userMove === "scissor" && botsMove === "paper")
  ) {
    console.log("You won!!!");
    winChanges(true);
  } else if (userMove === botsMove) {
    console.log("Draw!!!");
    winChanges();
  } else {
    console.log("Bot won!!!");
    winChanges(false);
  }
  reseter(userMove, botsMove);
};

const reseter = (userMove, botsMove) => {
  resetBtn.addEventListener("click", () => {
    userMove = "";
    botsMove = "";
    displayUserMove.setAttribute("src", "hour-glass.png");
    displayBotsMove.setAttribute("src", "hour-glass.png");
    resultDisplay.innerText = "Deciding...";
  });
};
