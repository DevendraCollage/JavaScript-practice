//todo: Practice-set-6 of JavaScript

//? To Get the input from the user in the server side using this require module
const prompt = require("prompt-sync")();

//* Que-1 Write a program using prompt function to take input of age as a value from the user and use alert to tell him if he can drive.
// let age = prompt("Enter Your Age Here : ");
// age = Number.parseInt(age);
// if (age < 18) {
//   let MSG = "You can not drive the vehicle!";
//   alert(MSG);
// } else if (age == 18) {
//   let msg = "Are you a student?";
//   alert(msg);
// } else {
//   let message = "You can drive the vehicle!";
//   alert(message);
// }

//* Que-2 In Q-1 use confirm to ask the user if he wants to see the prompt again.
while (true) {
  var con = confirm("Do You Want To Show Message Again!");
  if (con == true) {
    if (age < 18) {
      let MSG = "You can not drive the vehicle!";
      alert(MSG);
    } else if (age == 18) {
      let msg = "Are you a student?";
      alert(msg);
    } else {
      let message = "You can drive the vehicle!";
      alert(message);
    }
  } else {
    break;
  }
}

//* Que-3 In the previous question, use console.error to log the error if the age entered is negative.
let age = prompt("Enter Your Age Here : ");
age = Number.parseInt(age);
if (age < 0) {
  let MSG = "You can not drive the vehicle!";
  console.error(MSG);
} else if (age >= 18) {
  let msg = "Are you a student, You got the permission to drive the vehicle!";
  alert(msg);
} else {
  let message = "You can drive the vehicle!";
  alert(message);
}

//* Que-4 Write a program to change the url to google.com (Redirection) if user enters a number greater than 4.
let userInput = prompt("Enter The Number Here :");
userInput = Number.parseInt(userInput);
if (userInput == 4) {
  window.location.href = "http://www.google.com";
} else {
  window.location.href = "http://www.github.com/DevendraCollage";
}

//* Que-5 Change the background of the page to yellow, red or any other color based on used input through prompt.
let colorName = prompt("Enter The Color Name Here : ");
document.body.style.background = colorName;
