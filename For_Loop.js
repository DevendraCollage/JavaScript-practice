//? To Get the input from the user in the server side using this require module
const prompt = require("prompt-sync")();

//? Get the input of the number from the user
let num = prompt("Enter The you want to print : ");
num = Number.parseInt(num);

//? For loop to print the loop for user entered number
for (let i = 1; i <= num; i++) {
  console.log(i);
}

//? For loop too sum of N Natural numbers
let sum = 0;
for (let i = 1; i <= num; i++) {
  sum += i;
}
console.log("The First %d Natural Number Sum is : %d", num, sum);

//! Make it object
const Programming = {
  Python: "Guido van Rossum",
  JavaScript: "Brendan Eich",
  Java: "James Gosling",
  HTML: "Tim Burners Lee",
};
//? Using for-in loop print the key of the object (For-in loop are work with objects)
for (const key in Programming) {
  console.log(key);
}

//! Make it an array
const Languages = ["Python", "JavaScript", "Java"];
//? Using for-of loop print the value of the array (For-of print the value of the array if the object is iterable) (if you use this for-in loop with array than this will print the index of the array)
for (const iterator in Languages) {
  console.log(iterator);
}
