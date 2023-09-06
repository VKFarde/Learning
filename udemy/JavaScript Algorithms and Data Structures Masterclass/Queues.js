class Queue_Node{
    constructor(val)
    {
        this.data = val;
        this.next = null;
    }
}
class Queues{
    constructor()
    {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    EnQueue(val) //push() method ffrom Linked-list
    {
        let t = new Queue_Node(val);
        if(this.size ===0 || this.first == null)
        {
            this.first = t;
            this.last = t
        }
        else
        {
            this.last.next = t;
            this.last = t;
        }
        this.size++;
        return this;
    }
    DeQueue() // shift() method from linked-list;
    {
        if(!this.first) return null;
        if(this.first == this.last)
        {
            return null
        }
        else{
            var temp = this.first;
            this.first = this.first.next;
        }
        this.size--;
        return this;
    }
}