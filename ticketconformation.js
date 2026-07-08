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
  let firstPassengerName = readLine();
  let firstPassengerTicketStatus = JSON.parse(readLine());
  let secondPassengerName = readLine();
  let secondPassengerTicketStatus = JSON.parse(readLine());
  function createPassengerTicket(name,isTicketConfirmed){
       return{
       name,
      isTicketConfirmed,
       
   };
   }
   let result1=createPassengerTicket(firstPassengerName,firstPassengerTicketStatus);
   let result2=createPassengerTicket(secondPassengerName,secondPassengerTicketStatus);
   console.log(result1)
   console.log(result2)
}

  
