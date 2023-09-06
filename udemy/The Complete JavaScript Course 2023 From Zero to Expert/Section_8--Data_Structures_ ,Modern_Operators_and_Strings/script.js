"use strict";
const print = (t) => console.log(t);

const orderet = new Set(["ii", "ii", "fffd"]);
print(orderet);

print(orderet.size);

print(orderet.has("ii"));

print(orderet.add("pizza"));
print(orderet);

print(orderet.delete("ii"));
print(orderet);
// orderet.clear();
// print(orderet);

for (const i of orderet) {
  print(i);
}

/// set -->use to remove duplication in data set

const t = [1, 5, 3, 4, 62, 4, 56, 231, 5, 63, 45, 63, 25, 63, 5];

const unique = [...new Set(t)];

print(unique);

/// maps --> data can be store in key value pairs

const rest = new Map();
rest.set("name", "vedant");
rest.set("job", "inttern");
rest.set("sem", "8");
rest.set("years", "4");

print(rest);

rest.set("t", unique).set("m", t);

print(rest);

print(rest.get("t"));
print(rest.has("t"));
print(rest.delete("m"));
print(rest);
print(rest.size);
//print(rest.clear());

const que = new Map([
  ["que", "jgjgfuguuguuguigugu"],
  [1, "c"],
  [2, "java"],
  [true, "vjuhggfuju"],
  [false, "jhikhikhi"],
  ["nbjdhjugjdu", 3],
]);

print(que);

///we can convet objects into mapp---

const openingHours = {
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
};

let m = new Map(Object.entries(openingHours));
print(m);

for (const i of m) {
  print(i);
}

for (const [key, value] of que) {
  if (key === 2) {
    print(`${key} : ${value}`);
  }
}
