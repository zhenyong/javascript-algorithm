import { sort } from "../SelectionSort";

describe("SeletionSort", () => {
  it("应该正确排序", () => {
    expect(sort([1, 3, 2, 4, 5, 6, 7])).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });
});
