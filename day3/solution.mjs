import { readFile } from "fs/promises";

const file = await readFile("./input.txt", "utf-8");

const backpacks = file.split("\n");

let count = 0;
const letters = [];

const halveString = (string) => {
  if (!string) return;

  return [
    string.substring(0, string.length / 2),
    string.substring(string.length / 2),
  ];
};

const findSame = (bp) => {
  const firstCompartment = bp[0];
  const secondCompartment = bp[1];

  let ret;

  firstCompartment.split("").forEach((letter) => {
    if (secondCompartment.includes(letter)) {
      ret = letter;
    }
  });

  return ret;
};

const splitBackPacks = backpacks
  .map((bp) => {
    return halveString(bp);
  })
  .filter(Boolean);

splitBackPacks.forEach((bp) => {
  if (!bp) return;

  const same = findSame(bp);
  letters.push(same);
});

function countCh(ch) {
  if (ch.charCodeAt() >= 65 && ch.charCodeAt() <= 90) {
    // A charCode() = 65 subtract 38 would return 27 for A
    count = count + ch.charCodeAt() - 38;
  }

  if (ch.charCodeAt() >= 97 && ch.charCodeAt() <= 122) {
    // a charCode() = 97 subtract 96 would return 1 for a
    count = count + ch.charCodeAt() - 96;
  }
}

const countLetters = (letters) => {
  letters.forEach((l) => {
    countCh(l);
  });
};

countLetters(letters);

console.log(count);
