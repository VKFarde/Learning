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

const [player1, player2] = game.players;
print(player1);
print(player2);

let [gk, ...fildplayer] = player1;
print(gk);
print(fildplayer);

[gk, ...fildplayer] = player2;
print(gk);
print(fildplayer);

const allplayer = [...player1, ...player2];
print(allplayer);

const finalplayers = [...player1, "Thiago", "Coutinho", "Perisic"];
print(finalplayers);

//const { team1, x: draw, team2 } = game.odds;

const {
  odds: { team1, x: draw, team2 },
} = game;
print(team1);
print(draw);
print(team2);

const printGoals = function (...a) {
  print(a);
  print(`${a.length} golas are scored...`);
};

printGoals(2, 6, 3, 4, 56, 87, 9);
printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
printGoals("Davies", "Muller");
printGoals(...game.scored);

team1 < team2 && print(`teAm1 is more likely to win `);
team1 > team2 && print(`teAm2 is more likely to win `);
