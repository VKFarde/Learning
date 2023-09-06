class PriorityQueue {
    constructor(){
      this.values = [];
    }
    enqueue(val, priority) {
      this.values.push({val, priority});
      this.sort();
    };
    dequeue() {
      return this.values.shift();
    };
    sort() {
      this.values.sort((a, b) => a.priority - b.priority);
    };
  }
  
class Algo
{
    constructor()
    {
        this.graph = {};
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
    fun(start, end)
    {
        const node = new priority_Queue();
        let distances = {};
        let previous = {};

        for(let  i in this.graph)
        {
            if(i == start)
            {
                distances[i] = 0;
                node.enqueue(i,0);

            }
            else{
                distances[i] = Infinity;
                node.enqueue(i,Infinity);
            }
            previous[i] = null;
        }

        while(node.values.length){
            smallest = node.dequeue().val;
            if(smallest === finish){
                //WE ARE DONE
                //BUILD UP PATH TO RETURN AT END
                while(previous[smallest]){
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            } 
            if(smallest || distances[smallest] !== Infinity){
                for(let neighbor in this.adjacencyList[smallest]){
                    //find neighboring node
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    //calculate new distance to neighboring node
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node;
                    if(candidate < distances[nextNeighbor]){
                        //updating new smallest distance to neighbor
                        distances[nextNeighbor] = candidate;
                        //updating previous - How we got to neighbor
                        previous[nextNeighbor] = smallest;
                        //enqueue in priority queue with new priority
                        nodes.enqueue(nextNeighbor, candidate);
                    }
                }
            }
        }
        return path.concat(smallest).reverse();     
    }
}
