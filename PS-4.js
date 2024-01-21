//todo: Practice-set-4 of JavaScript

//? To Get the input from the user in the server side using this require module
const prompt = require("prompt-sync")();

//* Que-1 What will the following print in JavaScript - console.log(“har\””.length)
console.log(`The length of "har\" is ${'har"'.length}`); //? Output : 4 (because \" this counted as one single character)

//* Que-2 Explore the includes, startsWith and endsWith functions of a string.
let str = "Hello World";
console.log(str.includes("H")); //? Output : true
console.log(str.startsWith("H")); //? Output : true
console.log(str.endsWith("d")); //? Output : true

//* Que-3 Write a program to convert a given string to lowercase.
let myName = "DEVENDRA PARMAR";
console.log(myName.toLowerCase()); //? Output: devendra parmar

//* Que-4  Extract the amount out of this string “Please give Rs 1000”
let moneyString = "Please give Rs 1000.";
let extractMoney = moneyString.substring(15, 19);
console.log(extractMoney);

//* Que-5 Try to change the 4th character of a given string. Were you able to do it?
let originalStr = "I love coding!";
console.log(originalStr.replace("l", "L"));
