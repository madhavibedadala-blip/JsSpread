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
  let scheduledDate = new Date("2020-2-15");
  let rescheduledDate = JSON.parse(readLine());
  let rescheduledMonth = JSON.parse(readLine());
  let rescheduledYear = JSON.parse(readLine());
let a=rescheduledMonth+1;
   let b=rescheduledDate;
   scheduledDate= new Date(a+"-"+b+"-"+rescheduledYear);
  console.log(`${scheduledDate.getDate()}-${scheduledDate.getMonth() + 1}-${scheduledDate.getFullYear()}`);
}
