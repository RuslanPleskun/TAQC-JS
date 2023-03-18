// Task 1
const calcRectangleArea = (width, height) => {
  try {
    if (isNaN(width) || isNaN(height)) {
      throw new Error(`Provided value of either width - \'${width}\' or height - \'${height}\' is not numeric`);
    } else {
      console.log(`Rectangle area equals to ${width * height}`);
    }
  } catch (exception) {
    console.log(`${exception.name}: ${exception.message}`);
  }
};

calcRectangleArea(5, 7);
calcRectangleArea(5.5, 7.8);
calcRectangleArea("test", 7.8);

// Test 2
const checkAge = () => {
  try {
    let age = prompt("Please enter your age: ");
    if (age === "" || age === null) {
      throw new Error("The filed is empty! Please enter your age");
    } else if (isNaN(age)) {
      throw new Error("Provided age is not numeric! Please enter your age");
    } else if (age < 14) {
      throw new Error("Your are not old enough to watch films on this website!");
    } else {
      alert("Welcome to our website. Have fun while watching films here");
    }
  } catch (exception) {
    alert(`${exception.name}: ${exception.message}`);
  }
};

checkAge();

// Task 3
class MonthException {
  constructor(message) {
    this.name = "MonthException";
    this.message = message;
  }
  showMonthName(month) {
    try {
      switch (month) {
        case 1:
          return "January";
        case 2:
          return "February";
        case 3:
          return "March";
        case 4:
          return "April";
        case 5:
          return "May";
        case 6:
          return "June";
        case 7:
          return "July";
        case 8:
          return "August";
        case 9:
          return "September";
        case 10:
          return "October";
        case 11:
          return "November";
        case 12:
          return "December";
        default:
          throw new MonthException(`Incorrect month number`);
      }
    } catch (exception) {
      return `${exception.name} ${exception.message}`;
    }
  }
}

let monthName = new MonthException();
console.log(monthName.showMonthName(5));
console.log(monthName.showMonthName(14));

// Task 4
const showUser = (id) => {
  try {
    if (id > 0) {
      return { id: id };
    } else {
      throw new Error(`ID must not be negative: ${id}`);
    }
  } catch (exception) {
    console.log(`${exception.name}: ${exception.message}`);
  }
};

const showUsers = (ids) => {
  let result = [];
  for (id of ids) {
    result.push(showUser(id));
  }
  return result.filter((item) => item);
};

console.log(showUsers([7, -12, 44, 22]));
