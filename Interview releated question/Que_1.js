//* Write a JavaScript function that prints the letters 'a' through 'z' in the console. You should use a loop to iterate through the letters and print each one on a new line.

const printLetter = () => {
  for (let i = 97; i < 122; i++) {
    console.log(String.fromCharCode(i).toUpperCase());
  }
};
printLetter();
