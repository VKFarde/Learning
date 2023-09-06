function linear(arr, element) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return true;
    }
  }
  return false;
}

let t = [
  4, 6, 3, 9, 6, 3, 5, 89, 3, 5, 4, 89, 3, 31, 7, 8, 3, 6, 9, 58, 54, 7, 4,
];
console.log(linear(t, 3));
