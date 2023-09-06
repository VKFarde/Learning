/// IMPLEMENTINF IF--ELSE--IF--ELSE-IF--ELSE STRIC COMPARISION AND LOOSLY COMPARISION OP WITH STRING CONCANATETION

let t1 = 96;
let t2 = 108;
let t3 = 89;

st = (96 + 108 + 89) / 3;
sp = (88 + 91 + 110) / 3;

if (st === sp) {
    console.log('both are equal');
}
else if (st > sp) {
    console.log('the difference between ' + st + "- " + sp + " is" + (st - sp))
    console.log("st is grater than sp");
}
else {
    console.log('the difference between ' + sp + "- " + st + " is" + (sp - st));
    console.log("sp is grater than st");
}