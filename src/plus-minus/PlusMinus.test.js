import { toMatchCloseTo } from "jest-matcher-deep-close-to";
expect.extend({ toMatchCloseTo });

import plusMinus from "./PlusMinus.js";

describe("Plus Minus", () => {
  test("Should return plus = 0.375000 / minus = 0.375000 / zero = 0.250000 ", () => {
    const result = {
      plus: 0.375,
      minus: 0.375,
      zero: 0.25,
    };

    expect(plusMinus([1, 2, 3, -1, -2, -3, 0, 0])).toMatchCloseTo(result, 2);
  });

  test("Should return plus = 0.5 / minus = 0.333333 / zero = 0.166667 ", () => {
    const result = {
      plus: 0.5,
      minus: 0.333333,
      zero: 0.166667,
    };

    expect(plusMinus([-4, 3, -9, 0, 4, 1])).toMatchCloseTo(result, 2);
  });
});
