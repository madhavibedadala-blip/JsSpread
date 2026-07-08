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
function getOtpMessage(name, otp) {
   console.log(`Hi! ${name}, ${otp} is your OTP.`)
}
function main() {
  let customerName = readLine();
  let otp = JSON.parse(readLine());
  let otpMessage = getOtpMessage(customerName, otp);
}
