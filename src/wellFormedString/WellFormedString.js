/**
 * This problem was asked by Facebook
 * Given a string of round, curly, and square open and closing brackets, return whether the brackets are balanced (well-formed)
 * For example, given the strong "([])[]({}), you should return true
 * Given the string "([)]"or "((()", you should return false.
 *
 * @from https://www.dailycodingproblem.com/
 */

function wellFormedString(expression) {
  const expressionArr = expression.split("");
  const openChars = [];
  const chars = new Map([
    ["(", ")"],
    ["[", "]"],
    ["{", "}"],
  ]);

  const validation = expressionArr.every((char) => {
    if (chars.has(char)) {
      openChars.push(char);
      return true;
    } else {
      if (chars.get(openChars[openChars.length - 1]) === char) {
        openChars.pop();
        return true;
      } else {
        return false;
      }
    }
  });

  return openChars.length === 0 && validation;
}

export default wellFormedString;
