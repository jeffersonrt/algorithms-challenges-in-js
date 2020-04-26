import findDuplicated from "./sumArrayDeep";

describe("Find duplicated", () => {
  test("Should return [3, 2]", () => {
    const arrA = [1, 2];
    const arrB = [2, 3, 5];
    const arrC = [3, 2, 0, 5];
    const expected = [3, 2];

    expect(findDuplicated([arrA, arrB, arrC])).toBe(expected);
  });

  test("Should return [3, 2]", () => {
    const arrA = [2, 5, 3, 2, 8, 1];
    const arrB = [7, 9, 5, 2, 4, 10, 10];
    const arrC = [6, 7, 5, 5, 3, 7];
    const expected = [7, 5, 5, 2, 3];

    expect(findDuplicated([arrA, arrB, arrC])).toBe(expected);
  });
});
