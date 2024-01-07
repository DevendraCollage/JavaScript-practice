//todo: Practice-set-1 of JavaScript
//* 1 Que-1 Create a variable of type string and try to add a number to it.
//? -> ans:
let str = "Hello";
str = 15;
console.log(str);

//* Que-2 Use typeof operator to find the datatype of the string in last question.
console.log(typeof str); //! Output: number

//* Que-3 Create a const object in JavaScript. Can you change it to hold a number later?
const number = {
  value: 42,
};
number.value = 15;
console.log(number);

//* Que-4 Try to add a new key to the const object in Problem 3. Were you able to do it?
number.name = "Hello";
console.log(number);

//* Que-5 Write a JS program to create a word-meaning dictionary of 5 words.
const dictionary = {
  JS: "Dynamic-typed programming language",
  HTML: "Markup Language",
  CSS: "Style sheet Language",
  Java: "Oject-Oriented Programming Language",
  Git: "Version Control System",
};
