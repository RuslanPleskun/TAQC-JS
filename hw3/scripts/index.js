// Task 1
let arr = [2, 3, 4, 5];
let result = 1;
for(let i = 0; i < arr.length; i++) {
  result *= arr[i];
}
console.log(`Result of multiplication of all elements in the array using \"for\" loop: ${result}`);

result = 1;
let i = 0;
while(i < arr.length) {
  result *= arr[i];
  i++;
}
console.log(`Result of multiplication of all elements in the array using \"while\" loop: ${result}`);

// Task 2
for(let i = 0; i < 16; i++) {
  console.log(i % 2 === 0 ? `${i} is even` : `${i} is odd`);
}

// Task 3
function randArray(k) {
  let arr = [];
  for(let i = 0; i < k; i++) {
    arr.push(Math.floor(Math.random() * 500) + 1);
  }
  return arr;
}
console.log(randArray(5));

// Task 4
const raiseToDegree = (a, b) => {
  return Math.pow(parseInt(a), parseInt(b));
};
let a = prompt("Please enter the first number:");
let b = prompt("Please enter the second number:");
console.log(`The result of raising ${a} to a degree of ${b} equals to ${raiseToDegree(a, b)}`);

// Task 5
const findMin = (...numbers) => {
  minValue = numbers[0];
  for(const num of numbers) {
    if(num < minValue) {
      minValue = num;
    }
  }
  return minValue;
};
console.log(`The minimum value in the given array [12, 14, 4, -4, 0.2] is ${findMin(12, 14, 4, -4, 0.2)}`);
console.log(`The minimum value in the given array [5, -8, 88, -95, -95.2, 55, 0, -38, 77] is ${findMin(5, -8, 88, -95, -95.2, 55, 0, -38, 77)}`);

// Task 6
const findUnique = (arr) => {
  // Sort an array
  for(var i = 0; i < arr.length; i++){
    for(var j = ++i; j < arr.length; j++){
        if(arr[i] > arr[j]){
            var swap = arr[i];
            arr[i] = arr[j];
            arr[j] = swap;
        }
    }
  }
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === arr[++i]) {
      return false;
    }
  }
  return true;
};
console.log(`Does the following array [1, 2, 3, 5, 3] have only unique values? ${findUnique([1, 2, 3, 5, 3])}`);
console.log(`Does the following array [1, 2, 3, 5, 11] have only unique values? ${findUnique([1, 2, 3, 5, 11])}`);

// Task 7
const lastElement = (arr, value = 1) => {
  let size = arr.length;
  let result = [];
  if(value === 1) {
    return arr[--size];
  } else if(value >= size) {
    return arr;
  } else {
    for(let i = size - value; i < size; i++) {
      result.push(arr[i]);
    }
    return result;
  }
};
console.log(lastElement([3, 4, 10, -5]));
console.log(lastElement([3, 4, 10, -5], 2));
console.log(lastElement([3, 4, 10, -5], 8));

// Task 8
const capitalWord = (str) => {
  let arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  return arr.join(" ");
};
console.log(capitalWord("i love java script"));
