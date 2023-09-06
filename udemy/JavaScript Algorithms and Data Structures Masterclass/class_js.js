function print(t)
{
    console.log(t);
}
class my_first{
    constructor(firstname,lastname,year)
    {
        this.firstname = firstname;
        this.lastname = lastname;
        this.grade = year;
        this.t = 0;
        this.arr =[];
    }

    fullname()
    {
        return `Your full name is ${this.firstname} ${this.lastname}`;
    }

    marklate()
    {
        this.t +=1;
        if(this.t >= 3)
        {
            return `You Are Expelled!!!!!!!!`;
        }
        return `${this.firstname}${this.lastname} has been late ${this.t} times`;
    }

    addarr(ar)
    {
        this.arr.push(ar);
        return this.arr; 
    }
    calsum()
    {
        let sum = this.arr.reduce(function(a,b){return a+b;});
        return Math.floor(sum/this.arr.length);
    }
    static enrollstd(...s) // not uses data of specific user / instance of class but by using a class ;it is a used for accessed by globalize
    {
        return `your are not happy`
    }

}

class Point{
    constructor(x,y)
    {
        this.x =x;
        this.y = y; 
    }

    static distance(a,b)
    {
        const d1 = (a.x - b.x);
        const d2 = (a.y - b.y);

        return Math.hypot(d1,d2);
    }

}

let p1 = new Point(15,16);
let p3 = new Point(48,35);







let l = new my_first("vedant","farde",4);
let v = new my_first("vinit","parthi",5);

print(l.firstname);
print(v.firstname);
print(l.lastname);
print(v.lastname);
print(v.grade);
print(l.grade);

l.firstname = "kuntal";
print(l.firstname);
print(v.firstname);
print(l.lastname);
print(v.lastname);
print(v.grade);
print(l.grade);

print(l.fullname());
print(v.fullname());

l.marklate();
print(l.marklate());
l.marklate();
l.marklate();
l.marklate();
print(l.marklate());

l.addarr(100);
l.addarr(95);
l.addarr(96);
l.addarr(12);
l.addarr(321);
l.addarr(122);

print(l.arr);
print(l.calsum());

//print(l.enrollstd())// its not worloing as its 'Satically' define in class"
print(my_first.enrollstd()) // its working for accessing globalization 

print(Point.distance(p1,p3));