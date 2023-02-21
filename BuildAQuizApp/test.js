const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

//Updating the HUD with the ids written in HTML score and questionCounter
const questionCounterText = document.getElementById("questionCounter");
const scoreText = document.getElementById("score");

let currentQuestion = {}; //it's gonna be an object.
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0; // in what question are we
let availableQuestions = []; //Array de preguntas para que escoja una diferente cada vez
let questions = [
  {
    question: "qué horas son mi corazón?",
    choice1: "<te lo dije bien clarito>",
    choice2: "<8 de la mañana en la Habana Cuba>",
    choice3: "<me gusta mariguana>",
    choice4: "<me gustas tú>",
    answer: 1,
  },
  {
    question: "Akioras sales al pan",
    choice1: "8pm",
    choice2: "siempre",
    choice3: "nunca",
    choice4: "9pm",
    answer: 4,
  },
  {
    question: "cuantos gatos hay en el mundo",
    choice1: "<dos mil>",
    choice2: "<millones>",
    choice3: "<de muchos colores>",
    choice4: "<gorditos>",
    answer: 3,
  },
  {
    question: " How do you write 'Hello World' in an alert box?",
    choice1: "msgBox('Hello World');",
    choice2: "alertBox('Hello World');",
    choice3: "msg('Hello World');",
    choice4: "alert('Hello World');",
    answer: 4,
  },
  {
    question: "¿Cuál es el primer album de estudio de Portishead?",
    choice1: "Portishead",
    choice2: "Third",
    choice3: "Dummy",
    choice4: "Live at NYC",
    answer: 3,
  },
];

//CONSTANTS
const PUNTAJE = 1;
const MAX_QUESTIONS = 5; // How many questions the users get before they finish.
startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions]; //... are the spread operator that says takes this array, spread out each of its items and put them into a new array. To get a full copy all of those questions from the question array into the available questions.
  getNewQuestion();
};

// FUNCIÓN DE EVALUAR PREGUNTAS
getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
    //go to the index page
    return window.location.assign("index.html");
  }
  questionCounter++; // NO SÉ QUE HACE ESTOOOO CREÍ QUE SUMABA 1
  questionCounterText.innerText = `${questionCounter}/${MAX_QUESTIONS}`; //agrega un contador de preguntas dinámico dependiendo de cuántas queden dsiponibles

  //math.random get a random question number between 0-4
  // math.flor makes an integer number
  const questionIndex = Math.floor(Math.random() * availableQuestions.length); //avaliable Questions se pone en vez de un número fijo porque es un número variable de preguntas dependiendo de cuántas hayan pasado. based on the lenght of that array
  currentQuestion = availableQuestions[questionIndex]; // La pregunta actual se saca de las preguntas disponibles en el array.
  question.innerText = currentQuestion.question; //set a html element to be the current question.

  choices.forEach((choice) => {
    //choices.forEach will grab our choices and iterate through each of those choices
    const number = choice.dataset["number"];
    // choice.dataset is going to get that number from our dataset HTML property
    choice.innerText = currentQuestion["choice" + number];
  });
  availableQuestions.splice(questionIndex, 1);
  // we take the available questions array and splice out question that we just used  using the question Index. This is gonna get rid that we just used.
  acceptingAnswers = true; // when we load our question allow user to answer, not before.
};
choices.forEach((choice) => {
  //a cada resp uesta le vamos a agregar un evento-escucha click y a tomarlo como argumento:
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswers) return; //si no estamos tomando respuesta va a ignorar el click, vamos a retornar
    acceptingAnswers = false; // false: vamos a poner un delay para que no respondan inmediatamente.
    const selectedChoice = e.target; //
    //selctedAnswer: take this data atribute number and check if:
    const selectedAnswer = selectedChoice.dataset["number"];

    const classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect"; //detects if the answer is correct with a ternary sintax.

    // aquí llamamos a la función incrementScore, que pusimos más abajo, para sumar el puntaje.
    if (classToApply === "correct") {
      incrementScore(PUNTAJE);
    }

    selectedChoice.parentElement.classList.add(classToApply); //adds the class without remove it.

    setTimeout(() => {
      //sets a time out before the class correct or incorrect is removed.

      selectedChoice.parentElement.classList.remove(classToApply); //removes the class inmediatly like nothing was selected so we add a timeout before.

      getNewQuestion(); //llama una nueva pregunta.
    }, 1600); // este es el tiempo en milisegundos.
  });
});

//video 5: check if the user got the answer right and increment the score, then update the score text .
incrementScore = (num) => {
  score += num;
  scoreText.innerText = score;
};
startGame();
