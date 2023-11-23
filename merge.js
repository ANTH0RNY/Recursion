function merge(arr1, arr2) {
  const len_1 = arr1.length;
  const len_2 = arr2.length;
  const sum_len = len_1 + len_2;
  const res = [];
  let x = 0;
  let y = 0;

  for (let i = 0; i < sum_len; i++) {
    if (arr1[x] < arr2[y]) {
      res.push(arr1[x]);
      x++;
    } else {
      res.push(arr2[y]);
      y++;
    }
  }
  return res;
}

function mergeSimple(arr1, arr2) {
  let x = 0;
  let y = 0;
  let arr = [];

  for (let i = 0; i < arr1.length + arr2.length; i++) {
    if (arr1[x] < arr2[y]) {
      // console.log(arr1[x]);
      arr.push(arr1[x]);
      x++;
    } else if (x > arr1.length - 1) {
      console.log(y);
      arr.push(arr2[y]);
      y++;
    } else if (y > arr2.length - 1) {
      arr.push(arr1[x]);
      x++;
    } else {
      arr.push(arr2[y]);
      y++;
    }
  }
  return arr;
}
const arr1 = [3, 4];
const arr2 = [1, 6];
console.log(mergeSimple(arr1, arr2));
