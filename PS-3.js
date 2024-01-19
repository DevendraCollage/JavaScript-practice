//todo: Practice-set-3 of JavaScript

//? To Get the input from the user in the server side using this require module
const prompt = require("prompt-sync")();

//* Que-1 Write a program to print the marks of a student in an object using for loop obj = { harry: 98, rohan: 70, aakash: 7 };
let obj = {
  divin: 29,
  devendra: 17,
  paresh: 16,
};
for (let i = 0; i < Object.keys(obj).length; i++) {
  console.log(
    "The Marks of ",
    Object.keys(obj)[i],
    " Are ",
    obj[Object.keys(obj)[i]]
  );
}

//* Que-2 Write a program in Q-1 using for in loop.
for (const iterator in obj) {
  console.log("The Marks of ", iterator, " Are ", obj[iterator]);
}

//* Que-3 Write a program to print “try again” until the user enters the correct number.
let correctNum = 10;
let i;
while (i != correctNum) {
  i = prompt("Enter a number here : ");
}
console.log("You Have Entered Correct Number!");

//* Que-4 Write a function to find mean of 5 numbers.
const mean = (a, b, c, d) => {
  return (a + b + c + d) / 4;
};
console.log(mean(1, 2, 3, 4));
