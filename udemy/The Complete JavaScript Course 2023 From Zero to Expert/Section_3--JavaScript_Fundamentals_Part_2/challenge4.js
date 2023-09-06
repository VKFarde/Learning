
let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tip = [];
let total = [];

const calctip = (t) => {
    if (t <= 300 && t >= 50) {
        return ((t * 15) / 100);
    }
    else {
        return ((t * 20) / 100);
    }
}

for (let i = 0; i < bills.length; i++) {
    tip.push(calctip(bills[i]));
}
for (let i = 0; i < bills.length; i++) {
    total.push(calctip((bills[i] + tip[i])));
}



let calAvarge = (arr) => {

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return (sum / arr.length - 1);

}
calAvarge(total)