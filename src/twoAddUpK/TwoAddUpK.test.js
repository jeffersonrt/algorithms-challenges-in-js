import twoAddUp from "./TwoAddUpK.js";

describe("Problem Two elements add up to K", () => {
  test("Should return TRUE when is given [10, 15, 3, 7] and the sum of two ones is 17 ", () => {
    expect(twoAddUp([10, 15, 3, 7]), 17).toBe(true);
  });

  test("Should return TRUE when is given [-7, 13, 9, 21] and the sum of two ones is 14 ", () => {
    expect(twoAddUp([-7, 13, 9, 21]), 14).toBe(true);
  });

  test("Should return TRUE when is given [-12, -21, 18, 5, -4] and the sum of two ones is -7 ", () => {
    expect(twoAddUp([-12, -21, 18, 5, -4]), -7).toBe(true);
  });

  test("Should return FALSE when is given [ 13, 4, 18, 5, -38] and the sum of two ones is 10 ", () => {
    expect(twoAddUp([13, 4, 18, 5, -38]), 10).toBe(false);
  });

  test("Should return FALSE when is given an empty array", () => {
    expect(twoAddUp([]), 10).toBe(false);
  });
});
