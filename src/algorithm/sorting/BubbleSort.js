module.exports = {
  sort(inputArr) {
    const arr = [...inputArr];
    const size = arr.length;
    let sorted = false;
    for (let j = size; j > 1 && sorted == false; j--) {
      sorted = true;
      for (let i = 0; i < j - 1; i++) {
        if (arr[i] > arr[i + 1]) {
          [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]];
          sorted = false;
        }
      }
    }
    return arr;
  }
};
