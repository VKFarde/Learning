function swap(arr,a,b)
{
    let temp = arr[b];
    arr[b] = arr[a];
    arr[a] = temp;
}

function pivot(arr, start = 0, end = arr.length-1)
{
    let p = arr[start];
    let index = start;
    for(let i = start; i<= end; i++)
    {
        if(p >arr[i])
        {
            index++;
            swap(arr,index,i);
        }
    }
    swap(arr,start,index);
    return index;
}



function sorrt(arr,start = 0, end = arr.length-1)
{
    if(start < end)
    {
        let t = pivot(arr,start, end);
        sorrt(arr,start, t-1);
        sorrt(arr,t+1,end);
    }
    return arr;
}

console.log(sorrt([6,5,42,3,1,8,92,5,47,63,2,1]));