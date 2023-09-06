'use strict';  // use for debugging the code and finding error in code ----- when you misteckly used undefine var ar staement or expresion is throws error..
//its for finding bug in written code

let dgggas = false;
const passTest = true;

passTest ? dgggas = true : dgggas = false;
dgggas ? console.log(' i can drive') : passTest = false;

// private, interface, --- cannt use as variable

//function 
const print = (T) => console.log(T);


//////////////////////////////////////////////////////////


// basic function delceration and define
function clc(a) {
  return 2023 - a;
}
print(clc(2001));

// anonymous function decleration and define
/*
we can function without name and store it into variable this type called as anonymous function


// it may uses parametes or may not 
*/

const anonomaus = function (a) {  //anonymous function
  return 2023 - a;
}
print(anonomaus(2004));


/* there are two was to decler function:
1) by using function keyword {ex. function add() { \\ body of function } }
2)by storing function into variable {ex. const add = function ()  {  \\ body of function } }
*/

// Arrow Function
/*
arrow function with one parameter
let greet = name => {
  console.log("Hello, " + name + "!");
};
arrow function with no parameters
let today = () => {
  return new Date();
};

arrow function with one parameter and a single expression
let double = x => x * 2;
*/

const add1 = (a) => {
  return (2001 - a);
}

// Array

const rr = ['vedant', 'sumeet', 'vinit', 'ajay'];

let arr = new Array(4656, 5458, 899, 56, 46546, 4546, 54, 64,);

print(rr[0]);
print(arr[0]);
print(arr.length);
print(rr.length);
print(rr);
rr[0] = 'kuntal' // vedant replace to kuntal

// const is applicable only on primitive data type nd array is not primitive data type
print(rr);
print(rr[0]);
// arry only contain expression  not Statement

const vedant = ['vedant', 'farde', 22, 'shahapur'];



/// Array Methods:

print(vedant.length);
print(vedant);
vedant.push('maharashtra'); // add at end of array
vedant.push("thane");
vedant.push("INDIA");

print(vedant.length);
print(vedant);

vedant.pop(); // remove end element of array
print(vedant.length);
print(vedant);

vedant.unshift("karuna"); // add at start of array
print(vedant.length);
print(vedant);

vedant.shift(); // remove from start from array
print(vedant.length);
print(vedant);

let tt = vedant.includes(22); // cheach the specific element present in array
print(tt);


/// objects == key:value pair
// object define with the help of '{}'
// object have one than more propety are present
// object is unstructre data

const ved = {
  first: "vedant",
  BDY: 2001,
  last: "farde",
  friend: ["vedant", "kuntal", "shubham"],
  // calcAge: function (x) {
  // return 2023 - x;
  // }
  calcAge: function () {
    // print(this)
    return 2023 - this.BDY;
  }
};

print(ved);

/// object Method

print(ved.calcAge(2001));

// looping
// for loop  for(start; condition ;increment in start)
//while(condition)