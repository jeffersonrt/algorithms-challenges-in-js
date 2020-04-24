import { sumArrayDeep, sumArrayDeepReduce } from "./sumArrayDeep";

describe("Sum Array Deep", () => {
  test("Should return 20 when is given this array [1, 4,[ 4, 1], 5]", () => {
    expect(sumArrayDeep([1, 4, [4, 1], 5])).toBe(20);
  });

  test("Should return 12 when is given this array [5, 2, [ 7, -1], 3, [6, [-13, 8], 4]]", () => {
    expect(sumArrayDeep([5, 2, [7, -1], 3, [6, [-13, 8], 4]])).toBe(12);
  });
});

describe("Sum Array Deep Reduce", () => {
  test("Should return 20 when is given this array [1, 4,[ 4, 1], 5]", () => {
    expect(sumArrayDeepReduce([1, 4, [4, 1], 5])).toBe(20);
  });

  test("Should return 12 when is given this array [5, 2, [ 7, -1], 3, [6, [-13, 8], 4]]", () => {
    expect(sumArrayDeepReduce([5, 2, [7, -1], 3, [6, [-13, 8], 4]])).toBe(12);
  });
});
