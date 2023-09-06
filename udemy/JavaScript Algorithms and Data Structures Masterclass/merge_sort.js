function merge(a,b)
{
    let r = [];
    let i = 0;
    let j = 0;

    while(i <a.length && j < b.length)
    {
        if(b[j]>a[i])
        {
            r.push(a[i]);
            i++;
        }
        else{
            r.push(b[j]);
            j++;
        }
    } 

    while(i < a.length)
    {
        r.push(a[i]);
        i++;
    }

    while(j < b. length)
    {
        r.push(b[j]);
        j++;
    }
    return r;
}

function sort(arr)
{
    if(arr.length <=1 )
    {
        return arr;
    }
    var mid = Math.floor(arr.length/2);

    let left = sort(arr.slice(0,mid));
    let right = sort(arr.slice(mid));
    return merge(left,right);
}

console.log(sort([1,2,5,59,4,35,56,95,105]));