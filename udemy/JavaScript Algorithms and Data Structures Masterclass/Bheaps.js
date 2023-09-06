class Bheap{
    constructor()
    {
        this.data = [41,39,33,18,27,12];
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
}

let t = new Bheap();
t.insert(55);
t.insert(2);
t.insert(45);

console.log(t);