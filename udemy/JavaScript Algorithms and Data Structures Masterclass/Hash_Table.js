function print(t)
{
    console.log(t);
}

print("a".charCodeAt());
print("a".charCodeAt()-96);
print("h".charCodeAt());
print("h".charCodeAt()-96);
print("hi".charCodeAt());
print("hi".charCodeAt()-96);
print("hi".charCodeAt(0));
print("hi".charCodeAt(0)-96);
print("hi".charCodeAt(1));
print("hi".charCodeAt(1)-96);


function hash(key , len)
{
    let total =0;
    for(let char of key)
    {
        let val = char.charCodeAt(0)-96;
        total =(total + val) % len;
    }
    print(total);
}

hash("vedant", 12);
hash("kiranfarde", 12);

function newhash(key, len)
{
    var total = 0;
    let pprime = 31;
    for(var i = 0; i<
         Math.min(key.lenght,100);i++)
    {
        let char = key[i];
        let value = char.charCodeAt(0) - 96;
        total = (total*pprime+value) % len;
    }
    print(total);
}
 

newhash("vedant",8);
newhash("kiranfarde",5);
newhash("cyan",13);