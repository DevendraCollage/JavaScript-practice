//todo: Practice-set-5 of JavaScript

//? To Get the input from the user in the server side using this require module
const prompt = require("prompt-sync")();

let arrNum = [1, 5, 2, 8, 3, 6, 10, 50, 20, 22, 21]; //? This is the default array

//* Que-1 Create an array of numbers and take input from the user to add numbers to this array.
console.log(`Current Numbers are ${arrNum}`); //? This will print the array elements
while (true) {
  let num = Number(prompt("Enter a number to add or 'q' to quit : "));
  if (num === "q" || isNaN(num)) {
    //? This will check the condition when user enter the quit or character then break the loop and exit from iteration
    break;
  } else {
    arrNum.push(num); //? Otherwise this will push the array elements to the array
  }
  console.log(`Current Numbers are ${arrNum}`);
}

//* Que-2 Keep adding numbers to the array in question-1 until 0 is added the array.
console.log(`Current Numbers are of array ${arrNum}`);
while (true) {
  let num = Number(prompt("Enter a number to add or '0' to stop : "));
  if (num === 0) {
    break;
  } else {
    arrNum.push(num);
  }
  console.log(`Current Numbers are of array ${arrNum}`);
}

//* Que-3 filter for numbers divisible by 10 from a given array.
let filteredNum = arrNum.filter((value) => {
  if (value % 10 == 0) {
    return value;
  }
});
console.log(filteredNum);

//* Que-4 Create an array of square of given numbers.
let squareArray = arrNum.map((x) => {
  return x * x;
});
console.log(squareArray);

//* Que-5 Use reduce to calculate factorial of a given number from an array of first n natural numbers (n being the number whose factorial needs to be calculated).
let newArr = [1, 2, 3, 4, 5];
let Fact = newArr.reduce((x1, x2) => {
  return x1 * x2;
});
console.log(Fact);
