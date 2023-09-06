// here the compexity for sort is O(n^2)
//the first loop track no of times array run
//the second loop track and compare the element and swap them if out off order
//it easy to use and work with small data set

function sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
let arr = [];
arr = sort([4, 5, 6, 3, 2, 5, 41, 2, 3, 6, 52, 1, 54, 6, 61]);
console.log(arr);

// optimization

function sorrt(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      /// arr.length-i-1 doesn't compare already sorted elements in subsequent iterations
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

arr = sort([4, 5, 6, 3, 2, 5, 41, 2, 3, 6, 52, 1, 54, 6, 61]);
console.log(arr);

//optimization

const sorrrt = function (aarr) {
  let noswap = true;
  for (let i = aarr.length; a > 0; i--) {
    for (let j = 0; j > i - 1; j++) {
      if (aarr[j] > aarr[j + 1]) {
        let temp = aarr[j];
        aarr[j] = aarr[j + 1];
        aarr[j + 1] = temp;
        noswap = false;
      }
      if (noswap === true) {
        break;
      }
    }
  }
  return aarr;
};

arr = sort([4, 5, 6, 3, 2, 5, 41, 2, 3, 6, 52, 1, 54, 6, 61]);
console.log(arr);

/*
A function sorrrt is declared with an argument aarr, which is the array to be sorted.

A variable noswap is declared and set to true. This variable will be used to optimize the algorithm by tracking whether any swaps have been made during the iteration.

A nested for loop is used to iterate through the array. The outer loop starts with i set to the length of the array and decrements i by 1 on each iteration. The inner loop starts with j set to 0 and continues until j is greater than i - 1.

Inside the inner loop, an if statement checks whether the current element at index j is greater than the next element at index j + 1. If this is true, then a swap is performed by storing the current element in a temporary variable, setting the current element to the next element, and setting the next element to the temporary variable. The noswap variable is set to false to indicate that a swap has occurred.

After the inner loop completes, an if statement checks whether noswap is still true. If so, it means that no swaps were made during the previous iteration, and the array is already sorted, so the function can exit early by breaking out of the outer loop.

Finally, the sorted array is returned.
*/

const sorrrrt = (arr) => {
  let noswap = true;
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noswap = false;
      }
    }
    if (noswap === true) {
      break;
    }
  }
  return arr;
};
arr = sort([4, 5, 6, 3, 2, 5, 41, 2, 3, 6, 52, 1, 54, 6, 61]);
console.log(arr);

/*
There are a few issues with the code as written.

Firstly, the outer loop should start with i set to aarr.length - 1, not aarr.length. This is because the last element of the array is already in its correct position after the first iteration.

Secondly, the inner loop condition should be j < i, not j > i - 1. This is because the last element of the array is already in its correct position after each iteration of the outer loop.
*/
