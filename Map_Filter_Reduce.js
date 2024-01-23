//* 1. Use the map method on the Array - This will not return the new array this will perform the operation on the created array
//* This will contain the three argument
//? Create simple array
let num = [1, 2, 3, 4, 5];
//? 1. elements - This will return the elements of the array
//? 2. index - This will return the index of the array elements
//? 3. array - This will return the Proper Array
num.map((elements, index, array) => {
  console.log(elements);
});

//* 2. Filter Method - Filters an array with values that passes a test. Creates a new array
let n = [1, 2, 3, 4, 5, 6, 7];
let abc = n.filter((value) => {
  return value > 5;
});
console.log(abc);

//* 3. Reduce Method - Reduce an array to a single value
let arr = [1, 2, 3, 4, 5];
let arrNew = arr.reduce((l1, l2) => {
  return l1 + l2;
});
console.log(arrNew);
