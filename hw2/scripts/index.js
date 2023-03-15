// // Task 1
// let x = 1;
// let y = 2;

// let res1 = String(x) + String(y);
// console.log(res1); // "12"
// console.log( typeof res1); // "string"

// let res2 = Boolean(x) + String(y);
// console.log(res2); // "true2"
// console.log( typeof res2); // "string"

// let res3 = Boolean(x && y);
// console.log(res3); // true
// console.log( typeof res3); // " boolean "

// let res4 = x * "y";
// console.log(res4); // NaN
// console.log( typeof res4); // "number"

// // Task 2
// let userInput = prompt("Please enter any number:");
// let message = ((userInput % 2 === 0) && (userInput > 0) && (userInput % 7 === 0)) ? "Entered number is correct!" : "Entered value is incorrect because it is either not even or negative or not multiple of 7";
// alert(message);

// // Task 3
// const arr = [];
// arr.push(5);
// arr.push("test");
// arr.push(true);
// arr.push(null);
// alert(`Array contains ${arr.length} elements`);
// arr.push(prompt("Enter any value:"));
// alert(`The 5th element is equal to ${arr[4]}`);
// arr.shift();
// alert(`Final array contains the following values: ${arr}`);

// // Task 4
// let cities = [" Rome ", " Lviv ", " Warsaw "]; 
// let result = "\"" + cities.join("*") + "\"";
// console.log(result);

// // // Task 5
// let isAdult = prompt("How old are you?");
// alert(isAdult > 18 ? "You have reached the age of majority" : "You are still too young");

// // Task 6
// let a = prompt("Enter the length of the first side of the triangle:");
// let b = prompt("Enter the length of the second side of the triangle:");
// let c = prompt("Enter the length of the third side of the triangle:");
// if(!(isNaN(a) || isNaN(b) || (isNaN(c)))) {
//   let perimeter = Number(a) + Number(b) + Number(c);
//   let area = Math.sqrt(perimeter * (perimeter - a) * (perimeter - b) * (perimeter - c));
//   console.log(`The area of the triangle is: ${area.toFixed(3)}`);
//   console.log(((Math.pow(a, 2) + Math.pow(b, 2)) === Math.pow(c, 2)) ? "This triangle is rectangular" : "This triangle is not rectangular");
// } else {
//   alert("Incorrect data");
// }

// Task 7
let currentTime = new Date().getHours();
if(currentTime === 23 || (currentTime >= 0 && currentTime < 5)) {
  alert("Good night");
} else if(currentTime >= 5 && currentTime < 11) {
  alert("Good morning");
} else if(currentTime >= 11 && currentTime < 17) {
  alert("Good day");
} else if(currentTime >= 17 && currentTime < 23) {
  alert("Good evening");
} else {
  alert("Something wrong with hours value, it should be from 0 to 23");
}

switch(true) {
  case(currentTime === 23 || (currentTime >= 0 && currentTime < 5)):
    alert("Good night");
    break;
  case(currentTime >= 5 && currentTime < 11):
    alert("Good morning");
    break;
  case(currentTime >= 11 && currentTime < 17):
    alert("Good day");
    break;
  case(currentTime >= 17 && currentTime < 23):
    alert("Good evening");
    break;
  default:
    alert("Something wrong with hours value, it should be from 0 to 23");
}