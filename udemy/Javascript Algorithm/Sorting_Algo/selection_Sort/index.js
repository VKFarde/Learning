function sort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    /// assuming arr[i] === always minimum
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

let a = [54, 9, 6, 2, 4, 9, 63, 4, 9, 6, 3, 1, 87, 896, 1];
console.log(sort(a));

/// another way of writing selection sort
// right and traditional way to writting selection sort

function selection(a) {
  for (let i = 0; i < a.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < a.length; j++) {
      if (a[min] > a[j]) {
        min = j;
      }
    }
    if (i !== min) {
      let temp = a[i];
      a[i] = a[min];
      a[min] = temp;
    }
  }
  return a;
}

a = [54, 9, 6, 2, 4, 9, 63, 4, 9, 6, 3, 1, 87, 896, 1];
console.log(selection(a));

//selection has O(n^2) complexity as it uses Two LOOPS
// the first loop track and divide array into sorted and un-sorted array
// the second loop find index of minimum value elemunt and return to first block element
// after getting index of min element from second loop and checking equality of index oftraversing element from first loop and index of min element from sencond
//if equal then continioue
//else swap the element
