function print(t)
{
    console.log(t);
}
class Node
{
    constructor(val)
    {
        this.data = val;
        this.left = null;
        this.rigth = null;
    }
}
class BST{
    constructor()
    {
        this.root = null;
    }
    insert(val)
    {
        let newnode = new Node(val)
        if(!this.root)
        {
            this.root = newnode;
            return this;
        }else
        {
            var curr = this.root;
            while(true)
            {
                if(val == curr.data)
                {
                    return undefined;
                }
                if(val < curr.data)
                {
                    if(curr.left == null)
                    {
                        curr.left = newnode;
                        return this;
                    }
                    else
                    {
                        curr = curr.left;
                    }
                }
                else if(val > curr.data)
                {
                    if(curr.right == null)
                    {
                        curr.right = newnode;
                        return this;
                    }
                    else{
                        curr = curr.right;
                    }
                }
            }
        }
    }

    find(val)
    {
        if(this.root == null)
        {
            return false
        }
        if(val == this.root.data)
        {
            return true;
        }
        var curr = this.root;
        let found = false
        while(!found && curr)
        {
            if(val > curr.data)
            {
                curr = curr.right;
            }
            else if(val<curr.data)
            {
                curr = curr.left;
            }
            else{
                found = true;
            }
        }
        if(!found) return undefined;
        return curr;
    }
}


let t = new BST();
t.insert(45);
t.insert(11);
t.insert(12);
t.insert(48);
t.insert(95);
print(t);

