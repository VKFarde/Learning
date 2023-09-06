class heap
{
    constructor()
    {
        let data = [];
    }
    insert(t)
    {
        this.data.push(t);
        this.bubble();
    }
    bubble()
    {
        let index = this.data.length-1;
        const t = this.data[index]
        while(index>0)
        {
            let parentindex = Math.floor((index-1)/2);
            let parent = this.data[parentindex];
            if(t <= parent) break;
            this.data[parentindex] = t;
            this.data[index] = parent;
            index = parentindex;             
        }
    }
    sinkdown()
    {
        let idex = 0;
         const length = this.data.length;
         const element = this.data[0];

         while(idx > 0)
         {
            let left = 2 *idex +1;
            let right = 2 * idex +2;
            let rightchild, leftchild;
            let swap = null;

            if(left< length)
            {
                leftchild = this.data[left];
                if(leftchild > element)
                {
                    swap = left;
                }
            }
            if(right < length)
            {
                rightchild = this.data[right];
                if((swap == null && rightchild > element)||(swap !== null && rightchild > leftchild))
                {
                    swap = right;
                }
            }

            if(swap == null) break;
            this.data[idex] = this.data[swap];
            this.data[swap] = element;
            idex = swap;
         }
    }
    maxBheap(val)//remove
    {
        let Max = this.data[0];
        const end = this.data.pop();
        this.data[0] = end;
        this.sinkdown();
        return this.maxBheap;

    }
}