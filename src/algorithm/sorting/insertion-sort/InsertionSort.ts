export function sort(inputArr) {
  const arr = [...inputArr];
  for (let i = 1, len = arr.length; i < len; i++) {
    for (let j = 0; j < i; j++) {
      //   if (arr[i] < arr[j]) {
      //     arr = [
      //       ...arr.slice(0, j),
      //       arr[i],
      //       ...arr.slice(j, i),
      //       ...arr.slice(i + 1)
      //     ];
      //     break;
      //   }
    }
    for (let j = i - 1; j > 0; j--) {
      if (arr[i] < arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      } else {
        break;
      }
    }
  }
  return arr;
}

export default sort;
