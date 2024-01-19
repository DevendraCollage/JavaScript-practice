//? To Get the input from the user in the server side using this require module
const prompt = require("prompt-sync")();

//* You need to use function to separate the logic of the Two number Addition.
function addTwoNum(num1, num2) {
  return num1 + num2;
}

//? Get the two number from the user
let n1 = prompt("Enter The Number 1 : ");
n1 = Number.parseInt(n1);
let n2 = prompt("Enter The Number 2 : ");
n2 = Number.parseInt(n2);

//? Print the result of the two number addition
console.log("The Addition %d + %d = %d", n1, n2, addTwoNum(n1, n2));
