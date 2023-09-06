
function BFS()
{
    if(this.root == null)
    {
        return undefined;
    }

    let queue =[];
    let visted =[];

    let curr = this.root;

    queue.push(curr);

    while(true && queue.lenght)
    {
        curr = queue.shift();
        visted.push(curr.data);
        if(curr.left)
        {
            queue.push(curr.left);
        }
        if(curr.right)
        {
            queue.push(curr.right);
        }
    }

    return data;
}
