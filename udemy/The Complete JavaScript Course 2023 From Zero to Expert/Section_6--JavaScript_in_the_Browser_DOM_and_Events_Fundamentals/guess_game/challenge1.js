"use strict";
// dom Manupulation
console.log(document.querySelector(".message").textContent);

document.querySelector(".score").value = 20;

let s = 20;
//dom :- document object model
// structured represenaton of html doc allows js to access the html element
//e.g document.querySelector()
// complete representaion  of html
// dom is not part of js but part of web api
// dom manipulation works same in every browser

/*
document.querySelector(".message").textContent = "Correct Number!";
document.querySelector(".number").textContent = 14;
document.querySelector(".score").textContent = 14;
console.log(document.querySelector(".guess").value);
document.querySelector(".guess").value = 23;

*/
/*
document.querySelector(".check").addEventListener("click", function () {
  console.log(document.querySelector(".guess").value);
});
*/
document.querySelector(".check").addEventListener("click", function () {
  const t = Number(document.querySelector(".guess").value);
  console.log(typeof t);

  if (!t) {
    document.querySelector(".message").textContent = " no Number";
  } else if (t == n) {
    document.querySelector(".message").textContent = " Correct Number";

    document.querySelector(".number").textContent = n;

    //document.querySelector(".number").textContent = String(t);

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";
  } else if (t > n && s > 0) {
    document.querySelector(".message").textContent = " greater than secret no";

    s--;
  } else if (t < n && s > 0) {
    document.querySelector(".message").textContent = " less than secret no";
    s--;
  }
  document.querySelector(".score").textContent = String(s);
  /// Math.trunc()  ---- cut the decimal of Number
  //  Math.random()  ------- genrate random no from 0 to infinity

  // Math.random()*50  --------- gives random no between 0 - 49
  /// by adding 1 in above we change the range to 1 - 50
});
const n = Math.trunc(Math.random() * 50) + 1;
//document.querySelector(".number").textContent = n;

let sn = s;

document.querySelector(".again").addEventListener("click", function () {
  s = 20;
  n = Math.trunc(Math.random() * 50) + 1;
  document.querySelector(".number").textContent = "?";

  document.querySelector(".score").textContent = "20";

  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector("body").style.width = "15rem";
});
