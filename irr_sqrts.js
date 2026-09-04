const randomQuestion_value = document.getElementById("randomQuestion");
const answer_input = document.getElementById("answer_input");
const submit_btn = document.getElementById("submitAnswer");
const score_value = document.getElementById("score");

let randomNumber = 0;
let correctAnswer= 0;
let approxAnswer = 0;
let min = 1;
let max = 99;

function generate_random_question() {
  do {
     randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  } while (Math.sqrt(randomNumber) == Math.round(Math.sqrt(randomNumber)));
  
  correctAnswer = Math.sqrt(randomNumber);
  
  // approxAnswer
  let y = Math.pow(Math.round(Math.sqrt(randomNumber)),2);
  approxAnswer = (randomNumber + y) / (2 * Math.sqrt(y));
  
  randomQuestion_value.innerHTML = "√" + randomNumber;
  answer_input.value = "";
  answer_input.focus();
}

function check_answer() {
  const userAnswer = parseInt(answer_input.value);
  
  if (answer_input.value === "") {
    return;
  }

  score_value.innerHTML = "Correct answer: " + correctAnswer.toFixed(2) + "<br>Approx Answer: " + approxAnswer.toFixed(4);
  setTimeout(() => {
    score_value.innerHTML = "";
    generate_random_question();
  }, 2000);
}

submit_btn.addEventListener("click", check_answer);

answer_input.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    check_answer();
  }
});

generate_random_question();