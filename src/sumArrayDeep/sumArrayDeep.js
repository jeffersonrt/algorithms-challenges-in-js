/**
 * Sum Array Deep
 * Given a list of numbers and/or other lists, return the sum multiplied for the current deep.
 * For example, given [1, 2, 3, [5, 6], 7] the result will be 35.
 *
 */

const sumArrayDeep = (list, deeph = 1) => {
  let total = 0;

  list.forEach((element) => {
    if (Number.isInteger(element)) {
      total += element;
    } else {
      total += sumArrayDeep(element, deeph + 1);
    }
  });

  return total * deeph;
};

const sumArrayDeepReduce = (list, deeph = 1) => {
  let total = list.reduce((acc, element) => {
    if (Number.isInteger(element)) {
      return acc + element;
    }
    return acc + sumArrayDeep(element, deeph + 1);
  }, 0);

  return total * deeph;
};

export { sumArrayDeep, sumArrayDeepReduce };
