/*
 * You have three Arrays.
 * A = {2, 5, 3, 2, 8, 1}
 * B = {7, 9, 5, 2, 4, 10, 10}
 * C = {6, 7, 5, 5, 3, 7}
 *
 * Make an array from this three arrays which elements is present in at least two arrays.
 *
 */

function getDuplications(arr) {
  const result = new Set();
  let maxLoop = 0;
  const duplicated = new Map();

  arr.forEach((arr) => {
    maxLoop = Math.max(maxLoop, arr.length);
  });

  for (let i = 0; i < maxLoop; i++) {
    arr.forEach((currentArray, arrayIndex) => {
      const element = currentArray[i];
      if (duplicated.has(element) && arrayIndex !== duplicated.get(element)) {
        result.add(element);
      }
      element !== undefined && duplicated.set(element, arrayIndex);
    });
  }

  return result;
}

export default getDuplications;
