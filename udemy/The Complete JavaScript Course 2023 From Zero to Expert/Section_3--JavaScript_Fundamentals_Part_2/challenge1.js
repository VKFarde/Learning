const calcAverage = (a, b, c) => {
    return Math.floor((a + b + c) / 3);
}
function print(t) {
    console.log(t);
}
const checkWinner = function () {

    var team1 = calcAverage(44, 23, 71);
    var team2 = calcAverage(65, 54, 49);

    if (team1 >= 2 * team2) {
        print(`team1 is winner `);
    }
    else if (team2 >= 2 * team1) {
        print(`team2 is winner `);
    }
    else {
        print(`no one is winner `);
    }
}

checkWinner();
