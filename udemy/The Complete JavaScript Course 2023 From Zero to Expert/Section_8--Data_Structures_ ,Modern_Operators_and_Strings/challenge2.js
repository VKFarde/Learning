const print = function (t) {
  console.log(t);
};
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const t = game.scored;
print(t);

// without destructring
for (const i of t.entries()) {
  print(`${i[0] + 1} : ${i[1]}`);
}

// with destructuring
for (const [no, name] of game.scored.entries()) {
  print(`${no + 1}: ${name}`);
}

let values = Object.values(game.odds);
print(values);
let avg = 0;

for (let i of values) {
  avg += i;
}

avg /= values.length;

print(avg);

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}

let scorers = {
  //   Gnarby: 1,
  //   Hummels: 1,
  //   Lewandowski: 2,
};

for (const i of game.scored) {
  scorers[i] ? scorers[i] : (scorers[i] = 1);
}
