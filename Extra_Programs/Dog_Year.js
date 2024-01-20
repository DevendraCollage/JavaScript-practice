//* This variable set the my age
const myAge = 22;

//* Early variable to store the value 2 to it.
let earlyYears = 2;

//* This will multiply the value of earlyYears to 10.5
earlyYears = earlyYears * 10.5;

//* This will be subtract the 2 from the myAge and store it in the laterYears.
let laterYears = myAge - 2;

//* This will calculate the number of dog years accounted for by your later years.
laterYears *= 4;

//* This the age of dog to computed on the earlyYears and laterYears
let myAgeInDogYears = earlyYears + laterYears;

//* This will store my name with lowercase later
let myName = "XYZ";
myName = myName.toLowerCase();

console.log(
  "My name is %s. I am %d years old in human years which is %d years old in dog years.",
  myName,
  myAge,
  myAgeInDogYears
);
