const t = function (str) {
  let m = str.split("_");
  let p = [];

  for (const i of m) {
    p.push(i[0].toUpperCase() + i.slice(1));
  }
};

let rows = str.split("\n");

for (const [i, row] of str.entries()) {
  const [first, second] = row.toLowerCase().trim().split("_");
  const output = `${first}${second.replace(
    second[0],
    second[0].toUpperCase()
  )}`;
  console.log(`${output.padEnd(20)}${"✅".repeat(i + 1)}`);
}
