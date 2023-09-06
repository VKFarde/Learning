/// event handler function ==== called callback function
///
/*/*


const and let ------- block scope
var ---------------- function scope

function ------------ block scope in strict mode only

js variable try to find in its block scope---

*/

/////////////////---------------  Hosting ----------------////////////////

/*
hoisting : we can use variable without actually define */

// function declearation  ---- hoisted
// var variables   -------- hoisted ------ undefined
/// let and const ----------- not hoisted
//  function expression and arrow  --- depend upon var, let / const

const print = function (t) {
  console.log(t);
};
const myname = "vedant";
{
  if (myname == "vedant") {
    print(`vedant is a ${job}`); // get undefined as hoiste by var
    const age = 2023 - 2001;
    print(age);
    var job = "intern";
    //print(x);
  }
}

const add = function (a, b) {
  //error
  return a + b;
};
function add1(a, b) {
  /// works well
  return a + b;
}
const add2 = (a, b) => a + b; //error

///////----this keyword

print(this);

const calcage = function (b) {
  print(2023 - b);
  print(this); /// return error
};

calcage(2001);
const calc1age = (b) => {
  print(2023 - b);
  print(this); //return window{}
};

calc1age(2001);

const vedant = {
  year: 2001,
  calcage: function () {
    print(this);
  },
};
vedant.calcage();

/// pitfall of this keyword regular function and arrow function
// use regular function in class and objet as arrow function do not get this and so it uses window as objet that gives bug in our program

/// regular funtion call this keyword set to undefine

let lastname = "patil";
let oldlastname = lastname;
lastname = "farde";

console.log(lastname, oldlastname);

const karuana = {
  firstname: "karuna",
  lastname: "patil",
  age: 45,
  family: ["father", "mother", "sister"],
};
// print(karuana);
// const mariedkaruna = karuana;
// mariedkaruna.lastname = "farde";
// print(karuana);
// print(mariedkaruna);

///object copy:-------------[[[[  Object.assign() ]]]

const t = Object.assign({}, karuana); // shallow copy
t.lastname = "farde";
print(t);
print(karuana);

t.family.push("sons");
t.family.push("husband");
print(t);
print(karuana);

/// object.assign() cannot make the the copy of inside object/array in new objet
// the inside object/array from new/copy object point towards the old/prime objects inside object
// which make shallow copy of any object.
