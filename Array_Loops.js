//? Declare simple array
let num = [1, 2, 3, 4, 5];

//? Loop trough the array elements using for loop
for (let i = 0; i < num.length; i++) {
  console.log(num[i]);
}

//! Array.from() method to create array of any object
let arrFromObj = Array.from("Hello World"); //* This will create the array of the 'Hello World'
console.log(arrFromObj);

//? This will also print the elements of the array using the forOf loop
for (const iterator of num) {
  console.log(iterator);
}

//? This loop loop will print the index of the elements of the array
for (const key in num) {
  console.log(key);
}
