let num = [1, 2, 3, 4, 5];

//* Convert any array into string
console.log(num.toString()); //? And now this will be a string

//* Get the index of a specific element in an array using the method indexOf()
console.log(num.indexOf(2));

//* Join the array elements with separator using join() method - and you can join array elements with any symbol
console.log(num.join("-")); //? And now this will be a string

//* Removes the last element of the array using pop() method and this will change the original array
console.log(num.pop());

//* Add an element to the end of the array using push() method
console.log(num.push(5));

//* Removes an first elements of the array using shift() method
console.log(num.shift());

//* Add an element to the start of the array using unShift() method
console.log(num.unshift(1));

//* Removes any element from the array using delete operator - delete is an operator not an method this operator not affect an original array
delete num[6];
console.log(num.length);

//* Concat one or more array using concat() method - this method will merge two or more array in single and that will return new array not modified original array
let n = [1, 2];
let m = [3, 4, 5];
console.log(n.concat(m));

//* Sorting an array in alphabetically order using sort() method - this will sort accordingly to the first number of the number in array elements
let compare = (a, b) => {
  //   return a - b; //! This will sort in ascending order
  return b - a; //! This will sort in descending order
};
console.log(num.sort(compare)); //? This will return the right array because this will be sorted already

//* Convert an array into reverse array using reverse() method
console.log(num.reverse());

//* Splice and Slice
num.splice(5, 0, 6, 7); //! This method will help you to add elements in the array using splice() method - This method will contain 3 parameter first is start, second is which element you want to delete if you want to not delete any elements of the array you place it 0, third is which elements you want to insert - his effect the original array
console.log(num);
