/// js Array

//--- Array Method
/// Array as object  and array methods are object methods

let arr = ["a", "b", "c", "d"];
/// return copy of array --- blow methods
console.log(arr.slice(2)); //2 - arr.lenght
console.log(arr.slice(2, 4)); // 2 - 4
console.log(arr.slice(-4));

console.log(arr.slice()); // shallow copy of arrayṇ

//SPlICE -- same as slice but mutate the original aaray
// original array return by using splice() return values deleted from original array
arr.splice(-1);
console.log(arr);
arr.splice(1, 2); // splice(a,b) a == starting index / b == no of element deleted from in a
console.log(arr);

arr.push("t", "p", "q");
console.log(arr);
arr.reverse(); ///  reverse() muteate original array
console.log(arr);

//concat()

let arr1 = [...arr.reverse()];
arr.reverse();
console.log(arr1);
let t = arr.concat(arr1);
console.log(t);

let p = [...arr, ...arr1];
console.log(p);

console.log(p.join("_"));

// push(), remove, pop, indecof

// lec -2

//at() ---  works on both array and string
const tr = [23, 11, 54];
console.log(arr[0]);
console.log(arr.at(0));

// at()  --- use to replace [.....] of array

console.log(tr.slice(-1)[0]); // [0] -- used for accessing first element of array
console.log(tr.slice(-1)); // return array of single last element [54]
console.log(tr[tr.length - 1]);

console.log(tr.at(-2));

// lec -3
