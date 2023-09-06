const print =(t)=>
{
    console.log(t);
}

class head_list{
    constructor(data)
    {
        this.data = data;
        this.next = null;
        this.prvs = null;
    }
}
class doubly_link_list
{
    constructor()
    {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val)
    {
        let curr = new head_list(val)
        if(this.length === 0 || this.head == null)
        {
            this.head = curr;
            this.tail = curr;
        }
        else{
            this.tail.next = curr;
            curr.prvs = this.tail;
            this.tail = curr;
        }
        this.length++;
        return this;
    }
    pop(val)
    {
        if(this.length === 0|| this.head == null)
        {
            return undefined;
        }
        let curr = this.tail;
        if(this.length === 1)
        {
            this.head= null;
            this.tail= null;
        }
        else{ 
        this.tail = curr.prvs;
        this.tail.next = null;
        curr.prvs == null;
        }

        this.length--;
        return curr;
    }

    shift()
    {
        if(this.length === 0 ||this.head == null)
        {
            return undefined;
        }
        let curr = this.head;

        if(this.length == 1)
        {
            this.head == null;
            this.tail == null;
        }
        else{
            this.head = curr.next;
            curr.next = null;
            this.head.prvs = null;
        }
        this.length--;
        return curr;
    }
    unshift(val)
    {
        let curr = new head_list(val);

        if(this.head == null || this.length == 0)
        {
            this.head = curr;
            this.tail = this.head;
        }
        else{
            this.head.prvs = curr; 
            curr.next = this.head;
            this.head = curr;
        }
        this.length++;
        return this;
    }
    get(index)
    {
        if(index < 0 || index >= this.length) return null;
        var count, current;
        if(index <= this.length/2){
            count = 0;
            current = this.head;
            while(count !== index){
                current = current.next;
                count++;
            }
        } else {
            count = this.length - 1;
            current = this.tail;
            while(count !== index){
                current = current.prev;
                count--;
            }
        }
        return current;
    }
   
    set(val,index)
    {
        let curr = this.get(index);
        if(!curr)
        {
            curr.data = val;
            return true;
        }
        return false;
    }
    insert(val,index)
    {
        let curr = new head_list(val);
        if(index < 0 || index > this.length)
        {
            return false;
        }
        if(index === 0 )
        {
            return this.unshift(val);
        }
        if( index === this.length)
        {
            return this.push(val);
        }

        var beforeNode = this.get(index-1);
        var afterNode = beforeNode.next;
        
        beforeNode.next = curr;
        curr.prev = beforeNode;
        curr.next = afterNode;
        afterNode.prev = curr;
        this.length++;
        return true;
    }

    remove(index)
    {
        if(index < 0 && index>=this.length)
        {
            return false;
        }
        if(index === 0)
        {
            return this.shift();
        }
        if(index == this.length-1)
        {
            return this.pop();
        }
        var getnode = this.get(index-1);
        getnode.prvs.next = getnode.next;
        getnode.next.prvs = getnode.prvs;
        getnode.next = null;
        getnode.prvs = null;
        this.length--;
        return getnode;
    }
    
}

let t = new doubly_link_list();
t.push(5465);
t.push(656546);
t.push(165465646);
t.push(87878);
t.insert(564956,2);
print(t);