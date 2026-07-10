"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((str) => str.trim());

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function Person(firstName, lastName) {

   return{
       firstName,
       lastName
   }
}

/* Please do not modify anything below this line */

function main() {
  let firstName = readLine();
  let lastName = readLine();

   console.log(firstName+" "+lastName);
}
