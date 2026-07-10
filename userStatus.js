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

function User(username, isOnline) {
   return{
       username,
       isOnline,
          
   };
}
function main() {
  let firstUserName = readLine();
  let firstUserOnlineStatus = JSON.parse(readLine());
  let secondUserName = readLine();
  let secondUserOnlineStatus = JSON.parse(readLine());
   const firstUser= new User(firstUserName,firstUserOnlineStatus);
   const secondUser= new User(secondUserName,secondUserOnlineStatus);
   console.log("User",firstUser);
   console.log("User",secondUser);
  
}

