//* Write a JavaScript function isPangram that takes a string as input and returns true if string is a pangram (contains all letters of the alphabet) and false otherwise. The function should be case-insensitive and ignore spaces.
//! Constraints:
//? 1: The input string will consist of alphabetic characters and spaces.
//? 2: The function should handle both uppercase and lowercase letters.
//? 3: Consider the English alphabet with 26 letters.

const isPangram = (str) => {
  let newStr = str.replaceAll(" ", "");
  newStr = new Set(newStr);
  return newStr.size == 26;
};

let str = "Pack my box with five dozen liquor jugs"; // This string will contain a to z letters
console.log(isPangram(str));
