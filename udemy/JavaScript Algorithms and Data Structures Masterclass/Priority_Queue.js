class node{
    constructor(val,priority)
    {
        this.data = val;
        this.priority = null;
    }
}
class Priorit_Queue{
    constructor()
    {
        this.data = [];
    }

    EnQueue(val, priority)
    {
        let newnode = new node(val,priority);
        this.data.push(newnode);
        this.bubbleUp();
    }
    bubble()
    {
        let index = this.data.length-1;
        let element = this.dala[index];

        while(index > 0)
        {
            let pindex = Math.floor((index-1)/2);
            let p = this.data[pindex];
            if(element.priority <= p.priority) break;
            this.data[pindex] = element;
            this.data[index] = p;
            index = pindex;
        }
    }
    seeking()
    {
        let index = 0;
        var length = this.data.length;
        var element = this.data[0];

        while(true)
        {
            let leftchildidx = 2*index +1;
            let rightchildidx = 2*index+2;
            var left, right;
            let swap = null;
            if(leftchildidx < length)
            {
                left = this.data[leftchildidx]
                if(left.priority < element.priority)
                {
                    swap = leftchildidx;
                }
            }
            if(rightchildidx < length)
            {
                right= this.data[rightchildidx];
                if((swap == null && right.priority < element.priority) || (swap !== null && right.priority > leftchildidx.priority))
                {
                    swap = rightchildidx;
                }
            }

            if(swap == null)
            {
                break;
            }
            this.data[index] = this.data[swap];
            this.data[swap] = element;
            index = swap;
        }

    }
    Dequeue(val){
        let min = this.data[0];
        var end = this.data.pop();
        this.data[0] = end;
        this.seeking();
        return min;
    }
}