import { readFile } from "fs/promises";

let playerOne = 0;
let playerTwo = 0;
let p1 = 0;
let p2 = 0;

const input = await readFile("./input.txt", "utf-8");

const games = input.split("\n");

const rockPaperScissorsWinner = (input1, input2) => {
  if (
    (input1 === "A" && input2 === "X") ||
    (input1 === "B" && input2 === "Y") ||
    (input1 === "C" && input2 === "Z")
  ) {
    return { p1: 3, p2: 3 };
  }

  if (
    (input1 === "A" && input2 === "Y") ||
    (input1 === "B" && input2 === "Z") ||
    (input1 === "C" && input2 === "X")
  ) {
    return { p1: 0, p2: 6 };
  }

  if (
    (input1 === "A" && input2 === "Z") ||
    (input1 === "B" && input2 === "X") ||
    (input1 === "C" && input2 === "Y")
  ) {
    return { p1: 6, p2: 0 };
  }

  return { p1: 0, p2: 0 };
};

const scoreForPlayedType = (input) => {
  if (input === "A" || input === "X") {
    return 1;
  }

  if (input === "B" || input === "Y") {
    return 2;
  }

  if (input === "C" || input === "Z") {
    return 3;
  }

  return 0;
};

games.forEach((game) => {
  const { p1, p2 } = rockPaperScissorsWinner(game[0], game[2]);
  const one = scoreForPlayedType(game[0]);
  const two = scoreForPlayedType(game[2]);

  const pp1 = p1 + one;
  const pp2 = p2 + two;

  playerOne = playerOne + pp1;
  playerTwo = playerTwo + pp2;

  console.log({ playerOne, playerTwo });

  console.log(" ");
});

console.log({ playerOne, playerTwo });
