// Task 1
function getPromise(message, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Result: after ${delay / 1000} seconds, "${message}" is displayed in the console`);
    }, delay);
  });
}

getPromise("test promise", 2000).then(data => console.log(data));

// Task 2
function calcArrProduct(arr) {
  return new Promise((resolve, reject) => {
    let result = 1;
    for(el of arr) {
      if(isNaN(el)) {
        reject("Error! Incorrect array!");
      }
      result *= el;
    }
    resolve(result);
  });
}

calcArrProduct([3, 4, 5])
  .then(result => console.log(result))
  .catch(error => console.error(error));

calcArrProduct([5, "user2", 7, 12])
  .then(result => console.log(result))
  .catch(error => console.error(error));

// Task 3
const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));

function showNumbers() {
  let min = 0;
  let max = 9;
  let arr = [];
  for(let i = min; i <= max; i++) {
    arr.push(i);
  }

  let promise = Promise.resolve();

  for(let i = 0; i < arr.length; i++) {
    let number = arr[i];
    promise = promise.then(() => {
      let randTime = Math.floor(Math.random() * (max * 1000));
      return delay(number, randTime);
    }).then(number => console.log(number));
  }
};

showNumbers();

// Task 4
async function showNumbersAsyncAwait() {
  let min = 0;
  let max = 9;
  let arr = [];
  for(let i = min; i <= max; i++) {
    arr.push(i);
  }

  for(let i = 0; i < arr.length; i++) {
    let number = arr[i];
    let randTime = Math.floor(Math.random() * (max * 1000));
    await delay(number, randTime);
    console.log(number);
  }
};

showNumbersAsyncAwait();
