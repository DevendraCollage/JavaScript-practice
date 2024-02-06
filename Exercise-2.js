//* Use JS to create a game of Snake, Water & Gun. The game should ask you to enter S, W or G. The computer should be able to randomly generate S, W or G and declare Win or Loss using alert. Use confirm and prompt wherever required.

//? To Get the input from the user in the server side using this require module
const prompt = require("prompt-sync")();

console.log("----- This Game like Stone, Paper and Sizer -----");
//? First of getting input from the user
let userI = prompt("Enter S (Snake), W (Water) or G (Gun) : "); //* This will get input from the user like snake, water and gun
userI = userI.toLowerCase();
let comI = Math.floor(Math.random() * 3); //* This will generate the random number between 0 to 2
let cpu = ["s", "w", "g"][comI];

//? Create match function to match the result of the user and computer
const match = (cpu, userI) => {
  if (userI === cpu) {
    return "Match Tied!";
  } else if (userI === "s" && cpu === "w") {
    console.log("User Choice Is : ", userI);
    console.log("Computer Choice Is : ", cpu);
    console.log("You Are The Winner!");
  } else if (userI === "w" && cpu === "g") {
    // return "You Are The Winner!";
    console.log("User Choice Is : ", userI);
    console.log("Computer Choice Is : ", cpu);
    console.log("You Are The Winner!");
  } else if (userI === "g" && cpu === "s") {
    // return "You Are The Winner!";
    console.log("User Choice Is : ", userI);
    console.log("Computer Choice Is : ", cpu);
    console.log("You Are The Winner!");
  } else if (userI === "w" && cpu === "s") {
    // return "Computer can Win!";
    console.log("User Choice Is : ", userI);
    console.log("Computer Choice Is : ", cpu);
    console.log("Computer Is The Winner!");
  } else if (userI === "g" && cpu === "w") {
    // return "Computer can Win!";
    console.log("User Choice Is : ", userI);
    console.log("Computer Choice Is : ", cpu);
    console.log("Computer Is The Winner!");
  } else if (userI === "s" && cpu === "g") {
    // return "Computer can Win!";
    console.log("User Choice Is : ", userI);
    console.log("Computer Choice Is : ", cpu);
    console.log("Computer Is The Winner!");
  }
};
match(cpu, userI);
