/*A function binary is declared with two arguments: a (the sorted array) and elm (the element to search for).
A function binary is declared with two arguments: a (the sorted array) and elm (the element to search for).

Three variables start, end, and mid are initialized. start is set to 0 (the index of the first element in the array), end is set to the index of the last element in the array (a.length - 1), and mid is set to the index of the middle element of the array (calculated using the Math.floor() function).

A while loop is used to iteratively narrow down the search range by adjusting the values of start, end, and mid. The loop continues as long as the middle element of the current range (a[mid]) is not equal to the target element (elm) and start is less than or equal to end.

Inside the loop, two if statements are used to adjust the search range based on whether the middle element is greater than or less than the target element. If a[mid] is greater than elm, it means the target element must be in the lower half of the range, so end is set to mid - 1. If a[mid] is less than elm, it means the target element must be in the upper half of the range, so start is set to mid + 1. The mid value is then recalculated as the middle index of the new range.

If the loop exits because a[mid] is equal to elm, then the function returns true.

If the loop exits because start is greater than end, it means the target element is not in the array, so the function returns false.

Finally, an example is provided where the function is called with an array t and the target element 10. The result of the function call is logged to the console, which should output true.
*/
const binary = (a, elm) => {
  let start = 0;
  let end = a.length - 1;
  let mid = Math.floor((start + end) / 2);

  while (a[mid] !== elm && start <= end) {
    if (a[mid] < elm) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
    mid = Math.floor((start + end) / 2);
  }
  if (a[mid] === elm) {
    return true;
  }
  return -1;
};

let t = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(binary(t, 10));

//optimized and another way of writting the code
const binarySearch = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      return `the index of elemnt ${mid + 1}`;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1; // if target is not found
};

let m = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(binarySearch(m, 10));
