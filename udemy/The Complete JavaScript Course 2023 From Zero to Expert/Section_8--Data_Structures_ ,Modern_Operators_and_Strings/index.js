"use strict";
const print = (t) => console.log(t);

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  numgust: 0,

  order: function (s, m) {
    return [this.starterMenu[s], this.mainMenu[m]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  op: function (maini, ...otheri) {
    print(maini);
    print(otheri);
  },
};

// const arr = [3321, 15, 4, 21, 4, 3, 333, 434];
// let a, c, b;
// a = arr[0];
// b = arr[1];
// c = arr[2];

// print(a);
// print(b);
// print(c);

// // array destructring

// const [x, y, z] = arr;
// print(x);
// print(y);
// print(z);
/*
let [main, secondary] = restaurant.categories;
print(main);
print(secondary);

// // swapping of variale by using destructring
[main, secondary] = [secondary, main];
print(main);
print(secondary);
*/
// const [starter, maincoursce] = restaurant.order(3, 2);
// print(starter);
// print(maincoursce);

// let t = [454, 78, 3, 5, 6, 26, 53, [54, 3, 4, 9, 21, 54]];
// let [i = 0, j = 0, k, [m, p, q, r]] = t;

// console.log(i, j, k, p, q, r, m);

const { name, openingHours, categories } = restaurant; // destructuring objects
const { name: restaurantName, openingHours: hrs } = restaurant; //renaming  // using different named variable for assign object

const { name: restauantName = {}, openingHours: hr = {} } = restaurant; //setting default values

// ... spread op is use for expanding individual element of array
// creating new array based on existing arrray/ object

let arr = [1, 56, 3, 4545, 6, 3, 5, 4, 6];

// let p = [1, 9, 6, 62, ...arr, 3216, 5, 2, 65];
// print(p);

/// ... use on left side then use for grouping the element called as rest oprator
/// opposite effect of spread op
// both for array/object

const [a, b, ...c] = p;
print(c);

const add = function (...n) {
  /// if we use spraed op the function can take both array values and individual values
  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    sum += n[i];
  }
  print(sum);
};

const x = [2, 3];
add(...x);
add(8, 25, 3, 66, 3, 2, 5, 666, 3, 2, 5, 456);
add(...[8, 25, 3, 66, 3, 2, 5, 666, 3, 2, 5, 456]);

restaurant.op("hzxhfdhx", "sfjnksjfn", "sjmfdnkjsf", "fsjhfjhshfs", "sfjsjhf");

restaurant.op("sjfhshfhshfos");

///... {spread and rest op } use for dynamic sloving and real world problem;

print(3 || "vedant");

print("\n");

restaurant.numgust = 23;
let gus = restaurant.numgust || 10;
print(gus);

restaurant.numgust = 0; /// want to gus =0
gus = restaurant.numgust || 10;
print(gus); // result of ||(or) op is 10

////Nullish op : null and undefine (not 0 or '')
restaurant.numgust = 0;
gus = restaurant.numgust ?? 10; // by using nullish op
print(gus); // gus =0;
/// -------- short circuting

/// if truty value + ||{or}  ==> truty  value

print(0 && "vedant");
print(7 && "vedant");
print("hello" && 23 && null && "vedant");
if (restaurant.op) {
  restaurant.op("djdjghhdgh", "dgdhgdhg");
}

restaurant.op && restaurant.op("djdjghhdgh", "dgdhgdhg");

const rest1 = {
  name: "sgsg",
  nogust: 45,
};
const rest2 = {
  name: "ssgg",
  onwer: "vedant",
};

rest2.nogust = rest2.numgust || 10;
rest1.nogust = rest1.numgust || 10;

print(rest1);
print(rest2);

/// logical assignment op;

// ||= or equal
// &&= and equal
// ??=  nullish equal
/*
rest2.onwer &&= "<anonomush>";
print(rest2);

let main = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (let i of main) {
  print(i);
}

for (let i of main.entries()) {
  print(i);
}

//print(...main.entries());
for (let i of main.entries()) {
  print(`${i[0] + 1} :${i[1]}`);
}

/// by using destructring
for (let [i, ...j] of main.entries()) {
  print(`${i + 1} :${j}`);
}

// optional chaning
/// use for finding nasted property / property of object

if (restaurant.openingHours && restaurant.openingHours.mon) {
  // return false
  print(restaurant.openingHours.mon.open); /// gives error as mon = undefine
}

/// best way to check throug optional changging(?)
print(restaurant?.openingHours?.mon?.open); // if restaurant is present / declere  ==>.then access openingHoursis present / declere  ==>. then access monis present / declere  ==>then access .open)
print(restaurant?.openingHours?.fri?.open);

// optional chananing use for chech method/function

print(restaurant.order?.(1, 2) ?? " methid not exist");
print(restaurant.order123?.(1, 2) ?? " methid not exist");

// also works on arrays

let users = [{ name: "ajdajhkah", email: "zhdghdj@jadskjh.fsds" }];

print(users[0]?.name ?? "no user exist");

users = [{}];
print(users[0]?.name ?? "no user exist");
*/
