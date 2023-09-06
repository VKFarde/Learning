

function BST()
{
    var data = [];
    var queue = [];
    var curr = this.root;
    queue.push(this.root);
    while(queue.length)
    {
        node = queue.shift();
        data.push(node);
        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right);
    }
    return datal

}
