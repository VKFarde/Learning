const print = (t) =>
{
    console.log(t);
}

class node
{
    constructor(val)
    {
        this.data = val;
        this.left = null;
        this.right = null;
    }
}

class BT
{
    constructor()
    {
        this.root = null;
    }

    push(val) // insert function
    {
        let newnode = new node(val);
        if(this.root == null)
        {
            this.root = newnode;
            return this;
        }
        let current = this.root
        while(true)
        {
            if(val == current.data)
            {
                return undefined;
            }
            if(val > current.data)
            {
                if(current.right == null)
                {
                    current.right = newnode;
                    return this;
                }
                else
                {
                    current = current.right;
                }
            }
            else if(val < current.data)
            {
                if(current.left == null)
                {
                    current.left == newnode;
                    return this;
                }
                else
                {
                    current = current.left;
                }
            }
        }
    }

    find(val)
    {
        if(this.root == null)
        {
            return undefined;
        }
        let current = this.root;
        let found = false;
        while(true)
        {
            if(current.data == val)
            {
                found = true;
            }
            if(current.data>val)
            {
                current = current.left;
            }
            if(current.data < val)
            {
                current = current.right;
            }
            if(found == true)
            {
                break;
            }
        }
        return current;
    }
    remove(val,curr)
    {
        if(this.root == null)
        {
            return null;
        }
        if(val < curr.data)
        {
            curr.left = this.remove(val,curr.left);
        }
        else if(val > curr.data)
        {
            curr.right = this.remove(val,curr.right);
        }
        else{
            if(curr.left == null)
            {
                return curr.right;
            }
            else if(curr.right == null)
            {
                return curr.left;
            }
            curr.data = Math.min(curr.right);

            curr.right = this.remove(curr.data, curr.right)
        }

        return curr;   
        
    }

}

let t = new BT();
t.push(155);
t.push(48);
t.push(756);
t.push(785);
t.push(147);
t.push(12);
t.push(35);
t.push(1);
t.push(987);

print(t)