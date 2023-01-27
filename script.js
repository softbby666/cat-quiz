// Screen #1 Intro
//Declarar 2 variables: Una cuyo valor sea el ID del boton para ingresar el nombre del usuario y otra el ID del título o heading donde va a aparecer el nombre del usuario:
const buttonN = document.querySelector("#buttonName");
const heading = document.querySelector("#nombre");
//window.prompt() instructs the browser to display a dialog with an optional message prompting the user to input some text, and to wait until the user either submits the text or cancels the dialog.
buttonN.onclick = () => {
  const name = prompt("¿Cuál es tu nombre?");
  alert(`Hola, ${name}, es hora de comenzar!`);
  document.getElementsByClassName("start-quiz")[0].style.display = "block";
  document.getElementsByClassName("intro")[0].style.display = "none";
};

// Screen #2 Start Quiz

{
  nombre.textContent = `¿Estás list@ para comenzar la trivia, ${name}?`;
}
function startButton() {
  document.getElementsByClassName("pregunta1")[0].style.display = "block";
  document.getElementsByClassName("start-quiz")[0].style.display = "none";
}
function siguientePregunta2() {
  document.getElementsByClassName("pregunta2")[0].style.display = "block";
  document.getElementsByClassName("pregunta1")[0].style.display = "none";
  alert("La respuesta correcta es c. Siamés");
}
function siguientePregunta3() {
  document.getElementsByClassName("pregunta3")[0].style.display = "block";
  document.getElementsByClassName("pregunta2")[0].style.display = "none";
  alert("La respuesta correcta es b. Carnívora");
}

function resultado() {
  const p1 = document.getElementById("pregunta1");
  const p2 = document.getElementById("pregunta2");
  const p3 = document.getElementById("pregunta3");

  let puntaje = 0;

  if (correcto1.checked === true) {
    puntaje = puntaje + 1;
  }
  if (correcto2.checked === true) {
    puntaje = puntaje + 1;
  }
  if (correcto3.checked === true) {
    puntaje = puntaje + 1;
  }
  console.log(puntaje);
  alert(
    "Gracias por participar. Tu puntaje es " +
      puntaje +
      "/3" +
      "\n" +
      "Las respuestas correctas son:" +
      "\n" +
      "1.- Siamés" +
      "\n" +
      "2.- Carnívora" +
      "\n" +
      "3.- 12-16 hrs"
  );
  document.getElementsByClassName("reiniciar")[0].style.display = "block";
  document.getElementsByClassName("pregunta3")[0].style.display = "none";
}
function reiniciar() {
  document.getElementsByClassName("intro")[0].style.display = "block";
  document.getElementsByClassName("reiniciar")[0].style.display = "none";
}
