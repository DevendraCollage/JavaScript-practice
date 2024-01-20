//* The value saved to kelvin will stay constant. This will never change
const kelvin = 322;

//* Celsius is similar to kelvin - the only difference is that Celsius is 273 degrees less than kelvin.
var celsius = kelvin - 273;

//* Use this equation to calculate Fahrenheit, then store the answer in a variable named fahrenheit.
var fahrenheit = celsius * (9 / 5) + 32;

//* This will store the result in round value.
fahrenheit.floor;

console.log("The temperature is " + fahrenheit + " degrees Fahrenheit.");
