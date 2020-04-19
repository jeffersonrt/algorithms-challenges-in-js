import wellFormedString from "./WellFormedString";

describe("Well formed string", () => {
  test("Should return TRUE when is given '([])[]({})' ", () => {
    expect(wellFormedString("([])[]({})")).toBe(true);
  });
  test("Should return FALSE when is given '((()' ", () => {
    expect(wellFormedString("((()")).toBe(false);
  });
  test("Should return FALSE when is given '([)]' ", () => {
    expect(wellFormedString("([)]")).toBe(false);
  });

  test("Should return TRUE when is given '([])([{}])({})' ", () => {
    expect(wellFormedString("([])([{}])({})")).toBe(true);
  });
});
