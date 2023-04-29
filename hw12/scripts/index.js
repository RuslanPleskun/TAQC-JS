// Task 1
const upperCase = (str) => {
  const check = /^[A-Z]/.test(str) ? `String's starts with uppercase character` : `String's not starts with uppercase character`;
  console.log(check);
};
upperCase('regexp');
upperCase('RegExp');

// Task 2
const checkEmail = (email) => { console.log(/^[a-z]\w*(?:\.\w+)*@\w{2,}(?:\.\w{2,})+$/i.test(email)); };
checkEmail("Qmail2@gmail.com");
checkEmail("Qmail2gmail.com");

// Task 3
const checkMatch = (str) => { console.log(str.match(/d(b+)(d)/i)); };
checkMatch("cdbBdbsbz");

// Task 4
const swapText = (text) => { console.log(text.replace(/(\w+)\s(\w+)/, "$2, $1")); };
swapText("Java Script");

// Task 5
const validateCardNumber = (cardNumber) => { 
  console.log(/[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}/.test(cardNumber) ? "Success" : "Entered card number does not match the pattern, please try again!");
 };
validateCardNumber("9999-9999-999a-9999");
validateCardNumber("9999-9999-9999-9999");

// Task 6
const checkEmails = (email) => { console.log(/^[a-z]\w*(?:[-_](?![-_])\w+)*@[a-z0-9]+(?:\.[a-z]{2,})+$/i.test(email) ? "Email is correct!" : "Email is not correct!"); };
checkEmails('my_mail@gmail.com');
checkEmails('#my_mail@gmail.com');
checkEmails('my_ma--il@gmail.com');

// Task 7
const checkLogin = (login) => {
  const check = /^[A-Za-z]{1}[A-Za-z0-9\.]{1-9}$/.test(login.trim());
  const find = login.match(/\d+(?:\.\d+)?/g);
  console.log(`${check}\n${find}`);
};
checkLogin ('ee1.1ret3');
checkLogin ('ee1*1ret3');
