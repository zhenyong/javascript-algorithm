/* eslint-disable no-plusplus */
function merge(A: any[], B: any[]): any[] {
  const aLen = A.length;
  const bLen = B.length;
  const arr = [];
  for (let a = 0, b = 0; a < aLen || b < bLen; ) {
    if (a < aLen && (bLen <= b || A[a] < B[b])) {
      arr.push(A[a++]);
    }
    if (b < bLen && (aLen <= a || B[b] < A[a])) {
      arr.push(B[b++]);
    }
  }
  return arr;
}

export function sort(inputArr: any[]): any[] {
  const arr = [...inputArr];
  if (arr.length === 1) return arr;

  const mid = Math.floor(arr.length / 2);
  return merge(sort(arr.slice(0, mid)), sort(arr.slice(mid)));
}

export default {};
