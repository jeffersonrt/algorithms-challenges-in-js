/**
 * Binary Search
 * Given a list of ordered numbers, search for the given number.
 * For example, given [1, 2, 3, 34, 54, 56, 78] you need to find the number 3, the algorithm needs to return 2 (position on the array).
 * If the target is not found, it needs to return -1.
 *
 */

/*
 * ITERATIVE APPROACH
 */

const binarySearch = (list, target) => {
  let pointL = 0;
  let pointR = list.length - 1;
  let middlePoint = Math.floor((pointL + pointR) / 2);

  while (list.length > middlePoint) {
    //Depends on the programming language you are using you need to check if the array size (list) is bigger than middlePoint list.length > middlePoint to stop while
    let middleElement = list[middlePoint];

    if (middleElement === target) break;

    if (target < middleElement) {
      pointR = middlePoint - 1;
    }
    if (target > middleElement) {
      pointL = middlePoint + 1;
    }

    if (pointL > pointR) {
      middlePoint = -1;
      break;
    }
    middlePoint = Math.floor((pointL + pointR) / 2);
  }

  return middlePoint;
};

/*
 * RECURSIVE APPROACH
 */

const binarySearchRecursion = (
  list,
  target,
  pointL = 0,
  pointR = list.length - 1
) => {
  let middlePoint = Math.floor((pointL + pointR) / 2);
  let middleElement = list[middlePoint];

  if (middleElement === target) return middlePoint;

  if (pointL > pointR) return -1;

  if (target < middleElement) {
    return binarySearchRecursion(list, target, pointL, middlePoint - 1);
  }

  if (target > middleElement) {
    return binarySearchRecursion(list, target, middlePoint + 1, pointR);
  }
};

export { binarySearchRecursion, binarySearch };
