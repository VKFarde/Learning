class graph{
    constructor(val)
    {
        this.adjancencylist = {};
    }
    Addvertex(vertex){
        this.adjancencylist[vertex] =[];
    }
    Addedge(v1,v2)
    {
        this.adjancencylist[v1].push(v2);
        this.adjancencylist[v2].push(v1);
    }
    removecge(v1,v2)
    {
        this.adjancencylist[v1] = this.adjancencylist[v1].filter(
            v => v !== v2
        );
        this.adjancencylist[v2] = this.adjancencylist[v2].filter(
            v => v !== v1
        );
    }
    removevertex(v1)
    {
        
        while(this.adjancencylist[v1].lenght)
        {
            const adjancencylistvetrx = this.adjancencylist[v1].pop()
            this.removecge(v1,adjancencylistvetrx);
        }
        delete this.adjancencylist[v1];
    }
    dfsr(v)
    {
        let arr = [];
        let visited = {};
        const  adjancencylist = this.adjancencylist;
        
        function dfshelper(start)
        {
            if(!v)
            {
                return null;
            }
            visited[v] = true;
            arr.push(v);
            adjancencylist[v].forEach(navigator => {
                if(!visited[navigator])
                {
                    return dfs(navigator)
                }
            })(start);
        }
        return arr;
    }
    dfsit(start)
    {
        let arrstarck = [];
        let result = [];
        let visited = {};
        let currvertex;
        arrstarck.push(start);
        visited[start] = true;
        while(arrstarck.length)
        {
            currvertex = arrstarck.pop();
            result.push(currvertex);

            this.adjancencylist[currvertex].forEach(element =>
                
                {if(!visited[element])
                {
                    visited[element] = true;
                    arrstarck.push(element);
                }});
        }
        return result;
    }
    bfs(start)
    {
        let queue = [];
        let result = [];
        let visited = {};
        let curr;
        queue.push(start); 

        while(queue.length)
        {
            curr = queue.shift;
            result.push(curr);

            this.adjancencylist[curr].forEach(element => {

                if(!visited[element])
                {
                    visited[element] = true;
                    queue.push(element);
                }
            }
            );
        }
        return result;     
        
    }
}