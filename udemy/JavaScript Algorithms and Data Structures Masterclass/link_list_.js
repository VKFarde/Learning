const print = (t) => {
    console.log(t);
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
class list{
    constructor(data)
    {
        this.head =-ok/k
        this.tail = this.head;
    }
    push(val)
    {
        let newnode ={
            value : val,
            next : null
        };
        this.tail.next = newnode;
        this.tail = newnode;
    }
  
}

var l = new list(100);
l.push(120);
l.push(5498479654);
l.push("ahgduguasdusu");

print(l);
*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
class link_list{
    constructor()
    {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    pussh(data)
    {
        this.data = data;
        if(this.head === null || this.length === 0)
        {
            this.head = new link_list();
            this.tail = this.head;
        }
        else 
        {
            this.tail.tail = new link_list();
            this.tail

        }

        return this;
    }
}
*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class head_list{
    constructor(val)
    {
        this.data = val;
        this.next = null;
    }
}

class list{
    constructor()
    {
        this.head = null;
        this.tail = null;
        this.lenght = 0;
    }
    push(val)
    {
        let c = new head_list(val);
        if(this.lenght === 0 || this.head == null)
        {
            this.head = c;
            this.tail = this.head;
        }
        else
        {
            this.tail.next = c;
            this.tail = c;
        }

        this.lenght += 1;
        return this;
    }
    pop()
    {
        if(this.head == null || this.length === 0)
        {
            return undefined;
        }
        let curr = this.head;
        let prv = null;
        while(curr.next)
        { 
            prv = curr;  
            curr = curr.next;
        }
        this.tail = prv;
        this.tail.next = null;
        this.lenght -=1;
        return curr;
    }
    shift()
    {
        if(this.head == null || this.length === 0)
        {
            return undefined;
        }
        let curr = this.head;
        this.head = curr.next;
        this.lenght -=1;
        return curr;
    }
    unshift(val)
    {   let newhed = new head_list(val);
        if(this.lenght === 0 || this.head == null)
        {
            this.head = newhed;
            this.tail = this.head;
        }
        else
        {
            newhed.next = this.head
            this.head = newhed;
        }
        this.length +=1;
        return this;
    }
    get(val)
    {
        if(this.head == null || this.length === 0)
        {
            return undefined;
        }
        let i = 0;
        var curr= this.head;

        while( i !==val)
        {
            curr = curr.next;
            i++;
        }
        return curr;
    }

    set(val,index)
    {
        let t = this.get(index);
        if(t)
        {
            t.data = val;
            return true;
        }
        else
        {
            return false;
        }

    }
}

let temp = new list();
temp.push(100);
temp.push(874);
temp.push(56465);
temp.push("sjdfhg");

//print(temp);
/*/
temp.pop();
print(temp);
*/
/*
print(temp.shift());
print(temp.shift());
print(temp.shift());
*/
print(temp.unshift(5646));
print(temp.unshift(8798799));

print(temp.get(2));
print(temp.get(5));

print(temp.set(87,3));

