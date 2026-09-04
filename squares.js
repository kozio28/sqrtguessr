const randomQuestion_value = document.getElementById("randomQuestion");
const answer_input = document.getElementById("answer_input");
const submit_btn = document.getElementById("sumbitAnswer");
const score_value = document.getElementById("score");

let randomNumber = 0;
let correctAnswer= 0;
let min = 11;
let max = 99;

function generate_random_question() {
  randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  correctAnswer = Math.pow(randomNumber, 2);
  
  randomQuestion_value.innerHTML = randomNumber + "²";
  answer_input.value = "";
  answer_input.focus();
}

function check_answer() {
  const userAnswer = parseInt(answer_input.value);
  
  if (answer_input.value === "") {
    return;
  }

  if (userAnswer === correctAnswer) {
    score_value.innerHTML = "<span style='color: green;'> Prawda! </span>";
    setTimeout(() => {
      score_value.innerHTML = "";
      generate_random_question();
    }, 1000);
  } else {
    score_value.innerHTML = "<span style='color: red'> Źle </span>";
  }
}

submit_btn.addEventListener("click", check_answer);

answer_input.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    check_answer();
  }
});

generate_random_question();