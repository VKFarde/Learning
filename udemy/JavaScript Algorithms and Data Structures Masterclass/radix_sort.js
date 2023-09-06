function getdigit(num,place)
{
    let result;
    for(let i = 0; i< place+1; i++)
    {
        result = num %10;
        num = num / 10;
    }   
    return Math.floor(result);
}

function digitcount(num)
{
    let count = 0;
    if(num === 0)
    {
        return 1;
    }
    for(let i = 0; num !== 0; i++)
    {
        num = Math.floor(num / 10);
        count ++;
    }
    return count;
}

function max_no_digit(arr)
{
  
    let mx_digit = 0;
    for(let i = 0; i< arr.length; i++)
    {
        mx_digit = Math.max(mx_digit,digitcount(arr[i]));
    }

    return mx_digit;
}

function sorrt(arr)
{
    let mx_digit = max_no_digit(arr);

    for(let j =0 ;j<mx_digit; j++)
    { 
        let bucket =Array.from({length : 10},() => []) // let bucket = [[][][][][][][][][][]]
        for(let i = 0; i < arr.length; i++)
        {
            let digit = getdigit(arr[i],j);
            bucket[digit].push(arr[i]);
        }
        arr =[].concat(...bucket);
    }

    return arr;
}


console.log(sorrt([546546854,32,64,6456696,323,654695,326,56,121,54896,233,564,21,54,4]));


