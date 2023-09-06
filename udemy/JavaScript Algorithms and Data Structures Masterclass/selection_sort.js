function selection_sort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    var min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if (i !== min) {
      var temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}

console.log(
  selection_sort([
    4, 65, 63, 5, 757, 6969, 36, 32, 4563, 45, 754, 3, 32, 2, 242,
  ])
);

//selection has O(n^2) complexity as it uses Two LOOPS
// the first loop track and divide array into sorted and un-sorted array
// the second loop find index of minimum value elemunt and return to first block element
// after getting index of min element from second loop and checking equality of index oftraversing element from first loop and index of min element from sencond
//if equal then continioue
//else swap the element
