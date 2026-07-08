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
  let input = inputString[currentLine++]; 
  return input === undefined ? undefined : JSON.parse(input);
}
 function calculateTotalAmountWithInterest(p,t,r){
     const time=(t===undefined||t===null)?1:t;
     const rate=(r===undefined||r===null)?10:r;
     const amount=p*(1+(time*rate)/100);
     return amount;
 }
function main() {
  let p = readLine();
  let t = readLine();
  let r = readLine();
  let finalValue = calculateTotalAmountWithInterest(p, t, r);
  console.log(finalValue);
}
