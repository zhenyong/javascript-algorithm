const sort = require("../../BubbleSort").sort;

describe("BubbleSort", () => {
  it("应该正确排序", () => {
    expect(sort([2, 5, 7, 1, 4])).toEqual([1, 2, 4, 5, 7]);
  });
});
