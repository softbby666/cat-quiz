// 1. HTML DOM Events
document.getElementById("demo").onclick = function () {
  myFunction();
};

function myFunction() {
  document.getElementById("demo").innerHTML =
    "YOU CLICKED ME! I'M A P ELEMENT!";
}

// 2. Storing Variables
const buttonA = document.querySelector("#buttonName");
const headingA = document.querySelector("#nombre");

buttonA.onclick = () => {
  const name = prompt("What is your name?");
  alert(`Hello ${name}, nice to see you!`);
  nombre.textContent = `Welcome ${name}`;
};

// 3. querySelector[All]
//query.Selector is a Document method or function that returns only the first Element within the document that matches the specified CSS selector. If no matches are found, null is returned. Syntax: querySelector(any css selector) / document.instanceMethod('CSS SELECTOR');
const myHeading = document.querySelector(".hola");
// node.textContent represents the text content of the node and its descendants. It's often confused with HTMLElement.innerText. Here the code sets the value of the textContent property to "Hello, world".
myHeading.textContent = "Hello, world!";

// 4. Mostrar locación en Sydney con GoogleMaps:
// function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 8,
//   });
// }
