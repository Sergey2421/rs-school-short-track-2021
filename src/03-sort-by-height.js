/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const mas = arr.filter((elem) => elem !== -1);
  mas.sort((a, b) => {
    if (a > b) return 1;
    if (a === b) return 0;
    return -1;
  });
  return arr.map((elem) => {
    if (elem !== -1) return mas.shift();
    return -1;
  });
}

module.exports = sortByHeight;
