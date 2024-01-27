//* To print the methods of the console - how many methods available in the console object
// console.log(console);

//* To print any message in the console you want to use log() method - this is useful for console
// console.log("Hello, console");

//* To print any error in the console you want to use error() method - this is useful for console
// console.error("This is an error");

//* To use assert an any condition you want to use assert() method - this is useful for console
// console.assert(55 > 200); //? Output : Assertion : Failed
// console.assert(55 > 20); //? Output : Blank

//* To clear the console you want to use clear() method
// console.clear();

//* To print any object as a table format you want to use table() method - this will return output in a tabular format
// let obj = {
//   name: "Devendra",
//   age: 22,
//   city: "Rajkot",
// };
// console.table(obj);

//* To print any warning in the console you want to use warn() method - this is useful for console
// console.warn("This is a warning");

//* To print any information in the console you want to use info() method -  this is useful for console
// console.info("This is an information");

//* If you want to know the time on any code process you can use time() and timeEnd() method
console.time("Process");
for (let i = 0; i < 10; i++) {
  console.log(i);
}
console.timeEnd("Process");
