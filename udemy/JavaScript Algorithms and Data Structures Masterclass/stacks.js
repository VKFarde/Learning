class stack_node
{
    constructor(val)
    {
        this.data = val;
        this.next = null;
    }
}
class stack{
    constructor()
    {
        this.first = null;
        this.last = null;
        this.size =0;
    }

    push(val)/// unshift method from linked-list
    {
        let curr = new stack_node(val)
        if(!this.first)
        {
            this.first = curr;
            this.last = this.first;
        }
        else
        {
            let temp = this.first;
            this.first = curr;
            this.first.next = temp;
        }
        this.size++;
        return this;
    }
    pop() // shift() method from linked-list
    {
        if(this.size === 0 || this.first ==null)
        {
            return null;
        }
        var temp = this.first;
        if(this.first = this.last || this.size === 1)
        {
            return null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.data;
    }
}


// as the pop() method is not constant runtime form linked-list; as we need a find previous node and breack the link between 
//previous last node and tail node and reassingn the previous node as tail node.
// so we use shift() and unshift() methos as pop() and push() from linked-list  In stacks respectively;