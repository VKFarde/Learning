const clactip = (t) => {
    if (t >= 300 && t <= 50) {
        return ((t * 15) / 100);
    }
    else {
        return ((t * 20) / 100);
    }
}
let ttt = (a, b) => (a + b);
let print = (t) => console.log(t);

const main = () => {
    let arr = new Array(125, 555, 44);
    let tip = []

    for (let i = 0; i < arr.length; i++) {
        tip.push(clactip(arr[i]));
    }

    let total = [];
    for (let i = 0; i < arr.length; i++) {
        total.push(ttt(arr[i], tip[i]));
    }

    print(arr);
    print(tip);
    print(total);
}

main();