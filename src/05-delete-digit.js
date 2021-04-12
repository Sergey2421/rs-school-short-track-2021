/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  return +(n.toString().slice(0, n.toString().indexOf(Math.min.apply(0, n.toString().split('')))) + n.toString().slice(n.toString().indexOf(Math.min.apply(0, n.toString().split(''))) + 1));
}

module.exports = deleteDigit;
