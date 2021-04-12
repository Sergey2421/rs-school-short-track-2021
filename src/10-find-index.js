/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let first = 0;
  let last = array.length - 1;
  let mid = 0;
  while (first < last) {
    mid = Math.ceil((first + last) / 2);
    if (value < array[mid]) last = --mid;
    else if (value > array[mid]) first = ++mid;
    else if (value === array[mid]) return mid;
  }
  return mid;
}

module.exports = findIndex;
