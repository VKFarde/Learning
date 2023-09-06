/*
This algorithm is one of the simplest algorithm with simple implementation
Basically, Insertion sort is efficient for small data values
Insertion sort is adaptive in nature, i.e. it is appropriate for data sets which are already partially sorted.
*/

const sort = (arr) => {
  if (arr.length === 1) {
    return arr;
  }
  let key;
  let j;
  for (let i = 1; i < arr.length - 1; i++) {
    key = arr[i];
    j = i - 1;
    while (j > 0 && arr[j - 1] > arr[j]) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
};
