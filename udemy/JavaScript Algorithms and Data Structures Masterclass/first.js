function add(n){
    return (n*(n+1))/2;
}

function print(n){
    console.log(n);
}

var t1 = performance.now();
t = add(1000000000)
console.log(t);
var t2 = performance.now();
console.log(t2-t1);

let s = "             helllo vedant, everyone i m vedant        "
print(s);
print(s.length);
print(s.slice(15,26));
print(s.slice(-15));
print(s.slice(15,-6));

var t  = s.substr(0,15);
print(t);
t = s.substr(-6);
print(t);
t = s.substring(4);
print(t);

print(s.replace("vedant","kuntal"));

s = s.trim();
print(s);

let p = s.padStart(10,"x") ;
print(p);
print(s.padEnd(4,"x"));

print(p.split(" "));

print(s.charAt(-5));

print(p.charCodeAt(10));

print(s.indexOf("vedant"));
print(s.indexOf("vedant",26));
print(s.lastIndexOf("vedant"));
print(s.lastIndexOf("vedant",26))
print(s.search("ant"));
print(s.search("vedant"));
print(s.match("ant"));

print(s.matchAll(/ant/g))
print(s.matchAll(/ant/gi))

s = s.includes("farde",15)
print(s);

/*s = s.startsWith("hell")
print(s);
*/

/*q = `hello everyone, i'm "vedant fardde"`*/
var q  = `hello everyone,\b \r
 i'm \b \t
 "vedant fardde"\f`
print(q)

var t =`interpoler ${p},${q}`;
print(t);

i = NaN;
print(typeof(i));