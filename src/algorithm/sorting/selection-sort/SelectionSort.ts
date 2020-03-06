/* eslint-disable no-plusplus */
export function sort(inputArr) {
  const arr = [...inputArr];
  for (let i = 0, len = arr.length; i < len - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[i]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
    }
  }
  return arr;
}

export default sort;
