// SCREEN 1
const inicio = document.querySelector("#intro");
const btn = document.querySelector("#button"); // ENVIAR NOMBRE JUGADOR
let input = document.querySelector("#user-name"); // OBTENER NOMBRE JUGADOR
// SCREEN 2
const start = document.querySelector("#start-quiz");
let texto = document.querySelector("#nombre"); // INSERTAR NOMBRE JUGADOR

btn.addEventListener("click", home);

function home() {
  const valorUser = input.value.trim();
  if (valorUser === "") {
    alert("Ingresa tu nombre");
  } else {
    start.style.display = "block";
    inicio.style.display = "none";
    texto.innerHTML = valorUser;
  }
}
// QUIZ PREGUNTAS
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
