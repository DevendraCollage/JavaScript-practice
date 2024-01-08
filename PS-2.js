//todo: Practice-set-2 of JavaScript
const prompt = require("prompt-sync")(); //? This will use to get the input from the user
//* 1. Use logical operators to find whether the age of a person lies between 10 and 20?
let age1 = prompt("Enter the age here : ");
if (age1 >= 10 && age1 <= 20) {
  console.log("The given age is in the range of 10 to 20");
} else {
  console.log("The given age is not in the range of 10 to 20");
}

//* 2. Demonstrate the use of switch case statements in JavaScript.
switch (age2) {
  case "10":
    console.log("You are a kid.");
    break;
  case "20":
    console.log("You are a teenager.");
    break;
  default:
    if (age2 < 10 || age2 > 20) {
      console.log("Invalid Age");
    }
}

//* 3. Write a JavaScript program to find whether a number is divisible by 2 and 3.
let num1 = prompt("Enter a number : ");
if (num1 % 2 == 0 && num1 % 3 == 0) {
  console.log(num1 + " is divisible by both 2 and 3");
} else {
  console.log(num1 + " is not divisible by both 2 and 3");
}

// * 4. Write a JavaScript program to find whether a number is divisible by either 2 or 3.
let num = prompt("Enter The Number Here : ");
if (num % 2 == 0 || num % 3 == 0) {
  console.log(`${num} Is Divisible By Either 2 Or 3`);
} else {
  console.log(`${num} Is Not Divisible By Either 2 Or 3`);
}

//* 5. Print “you can drive” or “you cannot drive” based on age being greater than 18 using ternary operator.
let age3 = prompt("Enter Your Age Here : ");
console.log(age3 >= 18 ? "You Can Drive" : "You Cannot Drive");
