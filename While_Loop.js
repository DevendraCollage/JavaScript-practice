//? To Get the input from the user in the server side using this require module
const prompt = require("prompt-sync")();

//! Simple while loop program to print the number of the user choice
let choice = prompt("Enter The Number Here : ");
choice = Number.parseInt(choice);
//? While loop to print the number
let i = 1;
while (i <= choice) {
  console.log(i);
  i++;
}

//! Simple do-while loop program to print the number of the user choice
let userNum = prompt("Enter The Number Here : ");
userNum = Number.parseInt(userNum);
//? Do-While loop to print the number - this loop will execute will at-least one time if condition is match or not.
let x = 1;
do {
  console.log(x);
  x++;
} while (x <= userNum);
