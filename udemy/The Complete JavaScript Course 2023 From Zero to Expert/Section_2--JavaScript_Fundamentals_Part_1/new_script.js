const print = (t) => {
  console.log(t);
};
//// Data Type:-
/*
1 Number - interger , decimal,real, whole NUmbers
2 boolean - true/ false
3 string - sequence of characters [text]
4 symbole - unique value that can not be change
5 BigInt - large integer than number
6 undefined - value taken by variable is not yet define
7 null - empty value
*/

let t;
let m = true;
let p = null;
print(typeof t);
print(typeof m);
print(typeof p);
p = "iashfiui";
print(typeof p);
t = 19959;
print(typeof t);

/*

let - block scope and cannot be redeclared
var - can use the variable before it is declared and function scope/ globally-scoped
const - cannot be change after decler and define
*/

/*

opretors :
arithmatic :: +,-,*,/,**,//;
+ oprator can be used for concanate the string

typeod() - type of value;

assingment op (=);
+=
-=
*=
/=

increment/ decrement op
++ 
--

comparison op /// return true/false
>
<
>=
<=

*/

const v1 = "vedant";
const v2 = "farde";

print(v1 + " " + v2);

let x = 10;
x += 12;
x++; // x = x+1;
x--; // x = x-1;

print(x < 10);
print(x >= 10);

let now = 2023;
let q = 2022;
let w = 1998;
print(now);

print(now - q > now - w);

//Operator Precedence
/*
mdn Operator Precedence  --- search online
*/
let job = "intern";
let dob = 26082001;

const description = "Im " + v1 + " " + v2 + " and dob is " + dob;

/*/////////////string template

let  t = ` /// enter your string`
we can create multi line string by just using Enter key from keyboard

*/
print(description);
print(`im ${v1} ${v2} and Dob is ${dob}`);

print(`jbsaskajkijhgsika
sfshfiuwf
safbsgfi
sfnsjahfi`);

print("shifuysafu\ngsfdfggfsdfg\nsfsfsfsf");

// type convertion
/*
Number()- convert into no sting to number
Sting() - convert to string

*/

t = "jsfiahfiu";
print(Number(t));
t = Number(t);
print(typeof t);
t = String(t);
print(t);
print(typeof t);

/// falsy values - values that convet into false when we convert them into boolean
/*
0, empty string;
null
NaN
undefined*/

// remaining all convert into true{numbers, strings, empty object, objexts}

// === stric comparision ]|[  == loose comparision
/* 
== use type converstion and then compare
by using this we can compare string with number i.e. '18' == 18 is true
but '18' === 18 is false
*/

//ternary op
let age = 19;
let drive;

age > 18 ? (drive = true) : (drive = false);

print(drive);
