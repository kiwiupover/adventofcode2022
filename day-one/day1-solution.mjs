import { readFile } from "fs/promises";

let highestNumber = 0;
let counter = 0;
let elfCounter = 1;
let elves = [];

const input = await readFile("day1-input.txt", "utf-8");

const numbers = input.split("\n");

numbers.forEach((number) => {
  if (!number) {
    elves.push({ elfCounter, counter });
    counter = 0;
    elfCounter++;
    return;
  }

  counter = counter + +number;
});

elves
  .sort((a, b) => b.counter - a.counter)
  .splice(0, 3)
  .forEach((elf) => {
    highestNumber = highestNumber + elf.counter;
  });

console.log(highestNumber);
