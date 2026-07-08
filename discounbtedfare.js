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
  let fare = JSON.parse(readLine());
  let discountPercentage = JSON.parse(readLine());

   function discountedFare (fare,discountPercentage) {
     let result=fare-(fare*discountPercentage)/100;
      return result;
   }
   let ans=discountedFare(fare,discountPercentage);
   console.log(ans);  
}
