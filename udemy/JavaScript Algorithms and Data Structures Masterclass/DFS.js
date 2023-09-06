
function DFS_PreOrder()
{
    let arr =[];
    let curr = this.root;

    function Pre_order_helper(node)
    {
        arr.push(node.data)
        if(node.left) Pre_order_helper(node.left);
        if(node.right) Pre_order_helper(node.right);
    }
    Pre_order_helper(curr);
    return arr;
}

function DFS_PostOrder()
{
    let arr =[];
    let curr = this.node;

    function DFS_PostOrder_Helper(node)
    {
        if(node.left) DFS_PostOrder_Helper(node.left);
        if(node.right) DFS_PostOrder_Helper(node.right);
        arr.push(node.data);
    }
    DFS_PostOrder_Helper(curr);
    return arr;
}

function DFS_InOrder()
{
    let arr = []
    let curr = this.root;

    function DFS_InOrder_Helper(node)
    {
        if(node.left) DFS_InOrder_Helper(node.left);
        arr.push(node.data);
        if(node.right) DFS_InOrder_Helper(node.right);
    }
    DFS_InOrder_Helper(curr);
    return arr;
}