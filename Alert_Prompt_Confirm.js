//* 1. Alert - Used to invoke mini window in your program
alert("Hello this is an javascript");

//* 2. Prompt - This will store the user value in the variable
let a;
a = prompt("Enter The Number Here : "); //? This will give the string input you need to convert it into any required type
a = Number.parseInt(a); //? This will convert the string into integer if it's not null or undefined, otherwise NaN
console.log(a);

//* 3. Confirm - This will get the true or false from the user in addition of true or false
confirm("Do you want to allow the permission"); //? This will ask the user to ok or cancel
//? If user click ok then will get the permission, If user click cancel then this will not get permission to the user
//? Returns true for ok and false for cancel.
