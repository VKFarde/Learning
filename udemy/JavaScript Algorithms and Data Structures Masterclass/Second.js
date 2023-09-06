function print(t){
    console.log(t);
}
var x = 123
print(x.toString());
print((123).toString());
print((100+23).toString());

print(x.toExponential());
print((6456.6546).toExponential());

x = 9.6567467
print(x.toFixed(0));
print(x.toFixed(7));
print(x.toFixed(1));
x = x.toFixed(1);
print(x);

let p = new Date("1970-01-02");
print(p)
print (Number(p));
print(new Date("2001-08-26"));

const fruits = ["Banana", "Orange", "Apple", "Mango"];
print(fruits.join(" || "));
print(fruits.shift());
print(fruits.unshift("Banana"));
print(fruits.unshift("lemon"));

const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren1 = arr1.concat(arr2);
const myChildren = arr1.concat(arr2, arr3);
print(myChildren1);
print(myChildren);

fruit = ["Banana", "Orange", "Apple", "Mango"];
print(fruit);
print(fruit.splice(2, 1, "Lemon", "Kiwi"));
print(fruit.splice(2, 5, "Lemon", "Kiwi"));

function tree(t){
    return t*15;
}
function fuck(t){
    return t>100;
}
var t = [15, 16, 5, 10];

let m = t.map(tree);
print(m);
let y = m.filter(fuck);
print(y);