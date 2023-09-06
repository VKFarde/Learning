function insertion_sort(arr)
{
    for(let i = 1; i< arr.length; i++)
    {
        var curent = arr[i]
        for(let j = i-1; j >-1 && arr[j] > curent ;j--)
        {
          arr[j+1] = arr[j]         
        }
    }
    return arr;
}

console.log(insertion_sort([6,6,3,5,2,4,6,3,2,5,6,7,3,2,55,87]));