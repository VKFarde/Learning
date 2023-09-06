"use strict";

const b = [];
const t = function (f, n = 1, p = 199) {
  const boking = {
    f: this.f,
    n: this.n,
    p: this.p,
  };

  b.push(boking);
};

/// js donot pass by referecence

// --- first class fuction ---> higher order function

const a = function (s) {
  return s.replace(/ /g, "").toLowerCase();
};

const ucf = function (s) {
  const [first, ...j] = s.split(" ");
  return [first.toUpperCase(), ...j].join(" ");
};

const q = function (str, fn) {
  console.log(fn(str));
};
q("sjhfishfusfhu fgig iu jfweih ", a);
q("sjhfishfusfhu fgig iu jfweih ", ucf);
// the immediatly invooke fuction
// invoke only onces /// only run one time

const run = function () {
  console.log("sjhfiusahfsuafyh"); /// reuseacle function
};

(function () {
  console.log("only run one time after that it never run again");
})(); // triking js as above function is expresssion

(() => console.log("only run one time after that it never run again"))(); // arrow IIFE

// IIFE is pattern for managing Scope/data hiding (encapsulation / data privercy)

// clooser-----------------------------------------------------------------------------

const tyt = function () {
  let p = 0;

  return function () {
    p++;
    console.log(`${p} passengrs`);
  };
};

const booking = tyt();

booking();
booking();
booking();

// Closer is the backpack of all variables that present  in the enviroment where function was created

console.dir(booking);

let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

g();
f();

const h = function () {
  const b = 878;
  f = function () {
    console.log(b * 2);
  };
};

h();
f();

//example 2

const bp = function (n, waittime) {
  const g = Math.floor(n / 3);

  setTimeout(() => {
    console.log(`we are now boarding all ${n} passenger`);
    console.log(`we are boarding 3 groups, eact with ${g} passenger`);
  }, waittime * 1000);

  console.log(`will start boarding in ${waittime}seconds`);
};

bp(100, 3);

console.dir();
