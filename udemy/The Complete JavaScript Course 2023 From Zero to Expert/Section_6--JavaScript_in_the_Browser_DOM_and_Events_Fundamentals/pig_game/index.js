"use strict";

const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

let scores, currentScore, activePlayer, playing;

const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
score0El.textContent = 0;
score1El.textContent = 0;

const diceEl = document.querySelector(".dice");

diceEl.classList.add("hidden");

const btnnew = document.querySelector(".btn--new");
const btnroll = document.querySelector(".btn--roll");
const btnhold = document.querySelector(".btn--hold");

let current_score = 0;
btnroll.addEventListener("click", function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.classList.remove("hidden");
  diceEl.src = `./dice-${dice}.png`;

  if (dice !== 1) {
    current_score += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      current_score;
    //current0El.textContent = current_score;
  } else {
    activePlayer = activePlayer === 0 ? 1 : 0;
    current_score = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    player0El.classList.toggle(".player--active");
    player1El.classList.toggle(".player--active");
  }
});

const switchPlayer = () => {};

btnhold.addEventListener("click", function () {
  scores[activePlayer] += current_score;
  document.getElementById(`current--${activePlayer}`).textContent =
    scores[activePlayer];
});
