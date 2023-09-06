/// IMPLEMENTINF TERNARY(CONDITIONAL) OPERATOR
var val = 275;
var tip = 0;

val >= 50 && val <= 300 ? tip = (val * 15) / 100 : tip = (val * 20) / 100;

console.log(tip + val)