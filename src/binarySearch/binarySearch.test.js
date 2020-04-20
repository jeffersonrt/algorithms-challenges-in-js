import binarySearch from "./binarySearch.js";

describe("Binary Search", () => {
  test("Should return 3 when is given this array [0, 11, 21, 33, 45, 45, 61, 71, 72, 73 ] and target 33", () => {
    expect(binarySearch([0, 11, 21, 33, 45, 45, 61, 71, 72, 73], 33)).toBe(3);
  });

  test("Should return 2 when is given this array [1, 2, 3, 4, 5 ] and target 3", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(2);
  });

  test("Should return -1 when is given this array [1, 2, 3, 4, 5 ] and target 20", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 20)).toBe(-1);
  });

  test("Should return -1 when is given this array [1, 2, 3, 4, 6 ] and target 5", () => {
    expect(binarySearch([1, 2, 3, 4, 6], 5)).toBe(-1);
  });
});
