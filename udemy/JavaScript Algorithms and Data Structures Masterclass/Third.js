/*/function valid_anagram(t,n){

    if(t.length !== n.length)
    {
        return false;
    }
    t = t.sort();
    n = n.sort();

    for(let i = 0; i<t.length ;i++)
    {
        if(t[i] != n[i])
        {
            return false;
        }
        else{
            return true;
        }
    }
}*/

function valid_anagram(t, n){
    if(t.length !== n.length)
    {
        return false;
    }

    p = {}

    for(let i = 0; i< t.length; i++)
    {
        let temp = t[i]
        if(p[temp] == t[i])
        {
            p[temp] += 1;
        }
        else{
            p[temp] = t[i]
        }
    }

    for(let i = 0; i < t.length; i++)
    {
        let temp = n[i];
        if(!p[temp])
        {
            return false;
        }else
        {
            p[temp] -= 1;
        }
    }
    return true;
}

function main()
{
    console.log(valid_anagram("vedant","tnadev"));
}



















/*let t = [1,2,3];
let r = [1,4,9];
let p = [1,9];
let q = [2, 2,1];

for(let i = 0; i<t.length(); i++)
{
    if(t.length() == r.length())
    {
        continue;
    }else{
        return false;
    }

    for(let j = 0; j < r.length; j++)
    {
        let t = 
        
    }
    
}*/