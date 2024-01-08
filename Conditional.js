//! Simple Conditional Statement Program

//! 1. Simple-If Program to print the day of week
//? To Get the input from the user in the server side using this require module
const prompt = require("prompt-sync")();
let num = prompt("Enter The Number You Want to Print the Day of Week : ");
num = Number.parseInt(num);
if (num == 1) {
  console.log("Sunday!");
}
if (num == 2) {
  console.log("Monday!");
}
if (num == 3) {
  console.log("Tuesday!");
}
if (num == 4) {
  console.log("Wednesday!");
}
if (num == 5) {
  console.log("Thursday!");
}
if (num == 6) {
  console.log("Friday!");
}
if (num == 7) {
  console.log("Saturday!");
}

//! 2. Else-If-Else Program to print the day of week
let dayNum = prompt("Enter The Num to print day of week : ");
if (dayNum == 0) {
  console.log("Sunday!");
} else if (dayNum == 1) {
  console.log("Monday!");
} else if (dayNum == 2) {
  console.log("Tuesday!");
} else if (dayNum == 3) {
  console.log("Wednesday!");
} else if (dayNum == 4) {
  console.log("Thursday!");
} else if (dayNum == 5) {
  console.log("Friday!");
} else {
  console.log("Saturday!");
}

//! 3. Switch Program to print the day of week
let WeekDay = prompt("Enter The Num to print the day of week : ");
WeekDay = Number.parseInt(WeekDay);
switch (WeekDay) {
  case 1:
    console.log("Sunday!");
    break;
  case 2:
    console.log("Monday!");
    break;
  case 3:
    console.log("Tuesday!");
    break;
  case 4:
    console.log("Wednesday!");
    break;
  case 5:
    console.log("Thursday!");
    break;
  case 6:
    console.log("Friday!");
    break;
  case 7:
    console.log("Saturday!");
    break;
  default:
    console.log("Enter The Valid Week Day!");
}
