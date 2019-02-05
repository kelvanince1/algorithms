let button1 = document.getElementById("p1");
let button2 = document.getElementById("p2");
let reset = document.getElementById("reset");

let p1display = document.querySelector("#p1display");
let p2display = document.querySelector("#p2display");

let input = document.querySelector('input');

let para = document.querySelector('p');
let winningScoreDisplay = document.querySelector('p span');

let p1Score = 0;
let p2Score = 0;

let winningScore = 5;

let gameOver = false;

button1.addEventListener('click', () => {
  if (!gameOver) {
    p1Score++;
    if (p1Score === winningScore) {
      gameOver = true;
      p1display.classList.add('winner');
    };
    p1display.textContent = p1Score;
  };
});

button2.addEventListener('click', () => {
  if (!gameOver) {
    p2Score++;
    if (p2Score === winningScore) {
      gameOver = true;
      p2display.classList.add('winner');
    };
    p2display.textContent = p2Score;
  };
});

reset.addEventListener('click', () => {
  resetter();
});

input.addEventListener('change', () => {
  winningScoreDisplay.textContent = parseInt(input.value);
  winningScore = parseInt(input.value);
  resetter();
});

function resetter() {
  p1Score = 0;
  p2Score = 0;

  p1display.textContent = 0;
  p2display.textContent = 0;

  p1display.classList.remove('winner');
  p2display.classList.remove('winner');
  gameOver = false;
};
