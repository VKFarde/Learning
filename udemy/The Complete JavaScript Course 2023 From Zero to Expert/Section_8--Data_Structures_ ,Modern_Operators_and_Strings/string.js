const s = "jehrfjejr hui4hfi 3hr4iuhhi";

console.log(s[0]);
console.log("hfgefge"[0]);

console.log(s.length);
console.log("kgjhdfgye".length);

console.log(s.indexOf("p")); //not found
console.log(s.indexOf("e")); /// gives first ocurance of"e"
console.log(s.indexOf("hui4hfi")); // starting postion of string
console.log(s.lastIndexOf("t")); // not found
console.log(s.lastIndexOf("i")); // gives last position of "i" found in a string
console.log(s.lastIndexOf("hui4hfi")); //position of string

const print = (t) => console.log(t);
// slice --> give substring
let t = s.slice(4); //4--end
print(t);
t = s.slice(4, 10); //4--10

print(t);

console.log(s.slice(0, s.indexOf(" ")));
console.log(s.slice(s.indexOf(" ") + 1, s.lastIndexOf(" ")));
console.log(s.slice(s.lastIndexOf(" ") + 1));

const cms = (seat) => {
  if (seat.includes("B") || seat.includes("E")) {
    console.log("yo got midle seat");
  } else {
    console.log("nklhfiobv");
  }
};

cms("81");
cms("B8");
cms("15E");

///ṭoLowerCase()
//tpUpperCase()
//trim() //use for remove whitespaces

let m = "      dmgkjjgi@gog.com   \n";
print(m.toLowerCase().trimStart().trimEnd());
print(m.toLowerCase().trim());

m.replace("@", "$");
print(m);

// regular expression

let p = "yi uij ikui iuiu iuiui iuiu iiu iiu yi ";

print(p.replace("yi", "iy"));
print(p.replace(/yi/g, "iy")); ///regular epression uses /___/g ---> to replace all matchiNG patterns

//replace() do not mutate original string
// iTS creat new string/copy

//include()
// startswith()  --boolen val
// endswith()

// split() -----> create of array by specific divider string
// join() -----> join two or more string by specific divider string

/// padstart ---> give string spectific size

let tt = "sjhfshkghshglsjh";

print(tt.padStart(30, "+"));

print(tt.padEnd(30, "=="));

const makcard = function (nu) {
  const n = nu + "";

  const last = n.slice(-4);

  return last.padStart(n.length, "X");
};

print(makcard(65684654646));
