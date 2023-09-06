class graph{
    constructor()
    {
        this.arr = {};
    }
    addvertex(vertex)
    {
        if(!this.arr[vertex])
        {
            this.arr[vertex] = [];
        }
    }
    addedge(v1,v2,weight)
    {
        this.arr[v1].push({node:v2,weight});
        this.arr[v2].push({node:v1,weight});
    }
    dijkstras(start,end)
    {
        let result = [];
        let queue = [];
        let visit = {};
        let sum = 0;
        let minsum = 0;

        queue.push(start);
        result.push(start);

        while(queue.lenght)
        {
            visit[start]

        }

        

        
        return result;
    }

}