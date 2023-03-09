// Task 2
console.log("Ruslan");

// Task 3
let username = "David";
let city = "LA";
console.log(`${username} is from ${city}`);
username = city;
console.log(`${username} is from ${city}`);

// Task 4
const user = {
  name: "Mike",
  age: 25,
  isMarried: true,
  hasCar: undefined,
  numberOfChildren: null
};

// Task 5
let isAdult = confirm("Have you already reached the age of majority?");
console.log(isAdult ? "The age of majority was reached" : "The user is still a child");

// Task 6
let name = "Ruslan";
let surname = "Pleskun";
let group = "Q1-TAQC";
let year = 2000;
let maritalStatus = false;
console.log(`Entered values have the following types: ${typeof name}, ${typeof surname}, ${typeof group}, ${typeof year}, ${typeof maritalStatus}`);
let var1 = null;
let var2;
console.log(`And also here are two more variable types: ${typeof var1}, ${typeof var2}`);

// Task 7
let userAccount = prompt("Hello, could you please provide your name?");
let email = prompt("Enter your email:");
let password = prompt("Enter password:");
alert(`Dear ${userAccount}, your email address is ${email}, your password is ${password}.`);

// Task 8
alert("Please provide on the next promts the number of years, months and day for which you would like to get the number of seconds in it(type the numbers only)");
let years = prompt("Number of years:");
let months = prompt("Number of months:");
let days = prompt("Number of days:");
let result = () => {
  const daySeconds = 24 * 60 * 60;
  return 365 * years * daySeconds + 30 * months * daySeconds + days * daySeconds;
};
alert(`In the time period that you entered there are ${result()} seconds`);
