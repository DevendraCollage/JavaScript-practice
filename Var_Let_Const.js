//? This program differences the let, var and const.

//! 1. Difference using var
var num = 10;
if (true) {
  var num = 25; //? This will overwrite the value of outer variable of if
  console.log("Inside If Block (using var) :", num);
}
console.log("Outside If Block (using var) :", num);

//! 2. Difference using let
let demo = 10;
if (true) {
  let demo = 25; //? This will not overwrite the value of outer variable of if
  console.log("Inside if Block (using let) :", demo);
}
console.log("Outside if Block (using let) :", demo);

//! 3. Difference using const
const author = "Devendra";
//? author = 22; // Uncommenting this line will result in an error since 'const' variables are read-only
console.log("Using const:", author);
