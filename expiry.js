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

function main() {
  let manufacturingDate = new Date(readLine());
  let monthsToExpiry = parseInt(readLine());

 
  let expiryDate = new Date(manufacturingDate);
  expiryDate.setMonth(expiryDate.getMonth()+monthsToExpiry);//Write your code here.
  

  console.log(`${expiryDate.getDate()}-${expiryDate.getMonth() + 1}-${expiryDate.getFullYear()}`);
}
