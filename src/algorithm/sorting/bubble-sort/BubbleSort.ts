/* eslint-disable no-plusplus */

export function xsort(inputArr) {
  const arr = [...inputArr];
  const size = arr.length;
  let sorted = false;
  for (let j = size - 1; j > 0 && !sorted; j--) {
    sorted = true;
    for (let i = 0; i < j; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]];
        sorted = false;
      }
    }
  }
  return arr;
}

export function sort(inputArr) {
  const arr = [...inputArr];
  let j = arr.length - 1;
  while (j > 0) {
    let last = 0;
    for (let i = 0; i < j; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]];
        last = i;
      }
    }
    j = last;
  }
  return arr;
}
