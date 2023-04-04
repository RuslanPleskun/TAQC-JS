// Task 1
let timeout;
let delay = 2000;
let openTab = window.open("https://www.google.com/", "Google Chrome", "width=300,height=300");

setTimeout(() => {
  openWindow.resizeTo(500, 500);
}, 2000);

setTimeout(() => {
  openWindow.moveTo(200, 200);
}, 4000);

setTimeout(() => {
  openWindow.close();
}, 6000);

// Task 2
const changeCSS = () => {
  let text = document.querySelector("#text");
  text.style.color = "orange";
  text.style.fontSize = "20px";
  text.style.fontFamily = "Comic Sans MS";
};

// Task 3
const container = document.querySelector(".container").style.display = "flex";

const makeBlue = () => document.body.style.backgroundColor = "blue";

const makePink = () => document.body.style.backgroundColor = "pink";

const makeBrown = (isMouseDown) => isMouseDown ? document.body.style.backgroundColor = "brown" :  document.body.style.backgroundColor = "white";

const hoverLink = document.querySelector(".link");
hoverLink.addEventListener("mouseover", () => {
  document.body.style.backgroundColor = "yellow";
});

hoverLink.addEventListener("mouseout", () => {
  document.body.style.backgroundColor = "white";
});

// Task 4
const removeSelected = () => {
  const dropdown = document.getElementById("dropdown");
  const selectedValue = dropdown.value;
  if (selectedValue) {
    dropdown.removeChild(dropdown.querySelector(`[value="${selectedValue}"]`));
    dropdown.value = "";
  }
};

// Task 5
const textTag = document.querySelector(".customText");
const liveButton = document.querySelector(".live");
const clickButton = () => {
  textTag.innerHTML = "I was pressed!";
};

liveButton.addEventListener("mouseover", () => {
  textTag.innerHTML = "Mouse on me!";
});

liveButton.addEventListener("mouseout", () => {
  textTag.innerHTML = "Mouse is not on me!";
});

// Task 6
document.querySelector(".size").innerHTML = `Width: ${window.innerWidth}, Height: ${window.innerHeight}`;
window.addEventListener('resize', () => document.querySelector(".size").innerHTML = `Width: ${window.innerWidth}, Height: ${window.innerHeight}`);

// Task 7
const citiesByCountry = {
  ger: ['Berlin', 'Munich', 'Hamburg'],
  usa: ['New York', 'Los Angeles', 'Chicago'],
  ukr: ['Kyiv', 'Lviv', 'Odessa']
};

const countrySelect = document.getElementById('country');
const citiesSelect = document.getElementById('cities');
const selectedCountryCity = document.getElementById('selectedCountryCity');

countrySelect.addEventListener('change', () => {
  citiesSelect.innerHTML = '';

  const selectedCountry = countrySelect.value;

  const cities = citiesByCountry[selectedCountry];

  cities.forEach(city => {
    const option = document.createElement('option');
    option.text = city;
    citiesSelect.add(option);
  });

  selectedCountryCity.textContent = `${countrySelect.options[countrySelect.selectedIndex].text}, ${citiesSelect.options[citiesSelect.selectedIndex].text}`;
});

citiesSelect.addEventListener('change', () => {
  selectedCountryCity.textContent = `${countrySelect.options[countrySelect.selectedIndex].text}, ${citiesSelect.options[citiesSelect.selectedIndex].text}`;
});
