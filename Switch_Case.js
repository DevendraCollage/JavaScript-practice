//! Simple Switch-Case Program
const chalk = require("chalk");
const prompt = require("prompt-sync")();
let color = prompt("Enter The Color Here : ");
switch (color) {
  case "red":
    console.log(chalk.red.inverse("This is the red color!"));
    break;
  case "green":
    console.log(chalk.green.inverse("This is the Green color!"));
    break;
  case "yellow":
    console.log(chalk.yellow.inverse("This is the yellow color!"));
    break;
  default:
    console.log("Enter The Valid Color!");
}
