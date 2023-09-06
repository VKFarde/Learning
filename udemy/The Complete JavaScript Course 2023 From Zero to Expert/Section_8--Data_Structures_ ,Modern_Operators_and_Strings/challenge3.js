function print(t) {
  console.log(t);
}
const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

//1
const events = [...new Set(gameEvents.values())];

print(events);

//2
gameEvents.delete(64);
print(gameEvents);

//4
for (const [key, value] of gameEvents) {
  if (key < 45) {
    print(`[first half] ${key} : ${value}`);
  } else {
    print(`[second half] ${key} : ${value}`);
  }
}

for (const [min, event] of gameEvents) {
  const half = min <= 45 ? "FIRST" : "SECOND";
  console.log(`[${half} HALF] ${min}: ${event}`);
}

///3

print(`An event happened, on average, every ${90 / gameEvents.size}minutes`);

const key = [...gameEvents.keys()].pop();
print(key);

print(
  `An event happened, on average, every ${Math.trunc(
    key / gameEvents.size
  )}minutes`
);
