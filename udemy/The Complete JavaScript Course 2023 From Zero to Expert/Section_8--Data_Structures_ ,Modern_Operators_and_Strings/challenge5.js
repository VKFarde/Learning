const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//

let fly = flights.split("+");
console.log(fly);
let n = [];
for (const i of fly) {
  const [a, b, c, d] = i.split(";");

  n.push(
    `${a.replace(/_/g, " ")} from ${b.slice(0, 3).toUpperCase()} to ${c
      .slice(0, 3)
      .toUpperCase()} {${d.replace(";", "h")}}`
  );
}

console.log(n);
//let ot = [];
let otp = "";
for (const i of n) {
  //ot.push(i.padStart(40));
  otp += i.padStart(50) + "\n";
}

//console.log(ot);
console.log(otp);
