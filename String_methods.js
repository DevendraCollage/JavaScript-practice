//! This is some strings method to manipulate the string.
//! String are immutable

let myName = "Devendra";

//* You can use for loop to print the string
for (let i = 0; i < myName.length; i++) {
  console.log(myName[i]);
}

//* 1. Length of string - this is property
console.log(myName.length);

//* 2. Convert string to uppercase - this is built-in function
console.log(myName.toUpperCase());

//* 3. Convert string to lowercase
console.log(myName.toLowerCase());

//* 4. Slice the string - divide into two half
console.log(myName.slice(2, 5));
console.log(myName.slice(2));

//* 5. Replace the string with another string
console.log(myName.replace("Dev", "Par"));

//* 6. Return a string that concat two or more string
console.log(myName.concat(" Parmar"));

//* 7. Trim the string - remove the leading or trailing whitespace characters from the string
console.log(myName.trim());
