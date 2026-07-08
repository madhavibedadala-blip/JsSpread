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
function getWinnerOfTheRace(averageSpeedOfRacer1, averageSpeedOfRacer2) {
function main() {
  let averageSpeedOfRacer1 = JSON.parse(readLine());
  let averageSpeedOfRacer2 = JSON.parse(readLine());
  let winner = getWinnerOfTheRace(averageSpeedOfRacer1, averageSpeedOfRacer2);
  console.log(winner);
}
