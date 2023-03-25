// Task 1
document.getElementById("test").innerText = "Last";
document.querySelector("div#test").innerText = "Last";

// Task 2
const listAttributes = (tagName) => {
  if(tagName.hasAttributes()) {
    let output = `Attributes and their values of \'${tagName.tagName}\' tag:\n`;
    for (const attr of tagName.attributes) {
      output += `${attr.name} -> ${attr.value}\n`;
    }
    alert(output);
  } else {
    alert("No attributes to show");
  }
};

let imageEl = document.querySelector(".image");
imageEl.src = "./img/cat.jpg";
listAttributes(imageEl);

// Task 3
const printContent = (arr) => {
  if(arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      console.log(`Selector text ${i}: ${arr[i].innerText}`);
    }
  } else {
    console.log("There is no content to display");
  }
};

let par = document.querySelectorAll("#text p");
printContent(par);

// Task 4
const displayContent = (arr) => {
  let i = 0;
  let j = arr.length - 1;
  let result = [];
  while (i <= j) {
    if (i === j) {
      result.push(arr[i].innerText);
    } else {
      result.push(arr[i].innerText, arr[j].innerText);
    }
    i++;
    j--;
  }
  console.log(result);
};

const displayContentAlt = (arr) => {
  let result = [];
  for (let i = 0, j = arr.length - 1; i <= j; i++, j--) {
    result.push(arr[i].innerText);
    if (i !== j) {
      result.push(arr[j].innerText);
    }
  }
  console.log(result);
};

let arr = document.querySelectorAll("#list li");
displayContent(arr);
displayContentAlt(arr);

// Task 5
let topHeader = document.getElementById("task");
topHeader.style.backgroundColor = "rgb(144, 238, 144)";

let paragraphs = document.querySelectorAll("#myDiv p");
paragraphs[0].style.fontWeight = "bold";
paragraphs[1].style.color = "red";
paragraphs[2].style.textDecoration = "underline";
paragraphs[3].style.fontStyle = "italic";

const listToLine = (arr) => {
  for (const el of arr) {
    el.style.display = "inline";
  }
  const container = document.createElement("div");
  for (const el of arr) {
    container.appendChild(el.cloneNode(true));
  }
  const result = container.innerHTML.replace(/\s+/g, "");
  arr[0].parentNode.innerHTML = result;
};

let list = document.querySelectorAll("#myList li");
listToLine(list);

let spanEl = document.querySelector("span");
spanEl.style.visibility = "hidden";

// Task 6
const setInputFields = (message1, message2) => {
  let first = document.getElementById("input1");
  let second = document.getElementById("input2");

  first.value = message1;
  second.value = message2;

  document.querySelector(".btn").onclick = () => {
    first.value = message2;
    second.value = message1;
  };
};

let message1 = prompt("Please enter the first message");
let message2 = prompt("Please enter the second message");
setInputFields(message1, message2);

// Task 7
/**
 * In order not to create another HTML page, I decided to create just a section with a name Task 7, add div 
 * with ID "last-task" and create needed structure of tags and their attribues there with the help of DOM tools,
 * also I skipped adding "body" tag since I already have one in HTML structure and another one is not allowed
 */
const wrapper = document.getElementById("last-task");
const main = document.createElement("main");
const div = document.createElement("div");
const p = document.createElement("p");

main.setAttribute("class", " mainClass check item ");
div.setAttribute("id", "myDiv");
p.textContent = "First paragraph";
div.appendChild(p);
main.appendChild(div);
wrapper.appendChild(main);
