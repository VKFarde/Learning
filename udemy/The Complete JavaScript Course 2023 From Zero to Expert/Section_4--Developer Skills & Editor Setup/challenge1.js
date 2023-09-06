function forcst() {
  let t = [17, 21, 23];
  var j;
  var str = "";

  for (var i = 0; i < t.length; i++) {
    console.log(`${t[i]}oC in ${i + 1} days`);
    str = str + `...${t[i]}oC in ${i + 1} days`;
  }
  console.log(str);

  for (var i = 1; i < t.lenght; i++) {
    var j = i - 1;
    var key = t[i];
    while (j >= 0 && t[j] > key) {
      t[j + 1] = t[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
}

forcst();
