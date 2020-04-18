/*
 * Given an array of integers, calculate the fractions of its elements that are positive, negative, and are zeros.
 * Print the decimal value of each fraction on a new line.
 *
 * https://www.hackerrank.com/challenges/plus-minus/problem
 */
function plusMinus(list) {
  const listSize = list.length;

  const result = list.reduce(
    (accumulator, currentValue) => {
      accumulator.plus += currentValue > 0 ? 1 : 0;
      accumulator.minus += currentValue < 0 ? 1 : 0;
      accumulator.zero += currentValue === 0 ? 1 : 0;

      return accumulator;
    },
    { zero: 0, minus: 0, plus: 0 }
  );

  return {
    plus: result.plus / listSize,
    minus: result.minus / listSize,
    zero: result.zero / listSize,
  };
}

export default plusMinus;
