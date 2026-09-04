const randomQuestion_value = document.getElementById("randomQuestion");
const answer_input = document.getElementById("answer_input");
const submit_btn = document.getElementById("sumbitAnswer");
const score_value = document.getElementById("score");

const sqrts_4digit_ints = [];
let randomNumber = 0;
let correctAnswer= 0;

for (let i = 32; i <= 99; i++) {
  sqrts_4digit_ints.push(i * i);
}

function generate_random_sqrt() {
  const randomIndex = Math.floor(Math.random() * sqrts_4digit_ints.length);
  randomNumber = sqrts_4digit_ints[randomIndex];
  correctAnswer = Math.sqrt(randomNumber);
  
  randomQuestion_value.innerHTML = "√" + randomNumber;
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
      generate_random_sqrt();
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

generate_random_sqrt();