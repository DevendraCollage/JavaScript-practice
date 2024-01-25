//todo: Write a JavaScript program to generate a random number and store it in a variable. The program then takes an input from the user to tell them whether the guess was correct, greater or lesser than the original number. 100 – (no of guesses) is the score of the user. The program is expected to terminate o the number is guesses. Number should be between 1 – 100.

//? To Get the input from the user in the server side using this require module
const prompt = require("prompt-sync")();

//? Generate Random number and store it in the variable
let randomNum = Math.floor(Math.random() * 100) + 1;

//? Get the number from the user
let num = prompt(
  "Enter The Any Number To Guess you and computer guess the correct right number or not : "
);

//? Variable to store the chance -  user have the 100 chances to guess the right correct number
let change = 100;
let chance = 0;

while (true) {
  //* Check if the entered number is greater than the random number then print that your number is
  //* lower than the actual one
  if (num < randomNum) {
    console.log(`Your Number Is Lower Than Random Number!`);
    num = prompt("Try Again: ");
    change--;
    chance++;
  } else if (num > randomNum) {
    //* If the number is less than the random number then print that your number is higher than
    //* the actual one
    console.log(`Your Number Is Higher Than Random Number!`);
    num = prompt("Try Again: ");
    change--;
    chance++;
  } else {
    //* If the numbers are equal then print that you got it right!
    console.log(
      `Congrats You Got It Right, The Correct Number Was ${randomNum}`
    );
    console.log(
      `You Can Have the left the chances to guess the number ${change} Chances`
    );
    console.log(`You Can guess the number in ${chance} chance.`);
    break;
  }
}
