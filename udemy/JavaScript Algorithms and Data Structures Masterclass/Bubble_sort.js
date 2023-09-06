/* 
function sorrt(arr, n)
{
    for(let i = 0; i < n ; i++)
    {
        for(let j = 0; j < n; j++)
        {
            if(arr[j] > arr[j+1])
            {
               var temp =  arr[j];
               arr[j]= arr[j+1];
               arr[j+1] = temp;
            }
        }
    } 
    return arr;

}
let arr = [];
arr =sorrt([4,5,6,3,2,5,41,2,3,6,52,1,54,6],[4,5,6,3,2,5,41,2,3,6,52,1,54,6].length);
console.log(arr); */

function sorta(arr) {
  var noswape = true;
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noswape = false;
      }
    }
    if (noswape) break;
  }
  return arr;
}

let arr = [];
arr = sorta([4, 5, 6, 3, 2, 5, 41, 2, 3, 6, 52, 1, 54, 6]);
console.log(arr);
