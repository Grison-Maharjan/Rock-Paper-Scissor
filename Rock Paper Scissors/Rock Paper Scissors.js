//selecting all classes with class name users-moves
const allUserMoves = document.querySelectorAll(".user-move");

//finding move id when click event is performed in loop and passing user move value to botsTurn function.
allUserMoves.forEach((move) => {
  move.addEventListener("click", () => {
    const userMove = move.getAttribute("id");
    // console.log("You have choosed " + userMove);
    botsTurn(userMove);
  });
});

//receiving user move and generating bots move by randomizing index and padding both user move and bots move to decider function.
const botsTurn = (userMove) => {
  const allBotMoves = ["rock", "paper", "scissor"];
  const randomizer = Math.floor(Math.random() * 3);
  const botsMove = allBotMoves[randomizer];
  // console.log(`Bot has choosen ${botsMove}`);
  decider(userMove, botsMove);
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
  } else if (userMove === botsMove) {
    console.log("Draw!!!");
  } else {
    console.log("Bot won!!!");
  }
};
