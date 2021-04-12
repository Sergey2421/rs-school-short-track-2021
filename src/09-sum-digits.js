/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let result = 0;
  do {
    // eslint-disable-next-line no-param-reassign
    if (result >= 10) n = result;
    // eslint-disable-next-line no-unused-vars
    result = 0;
    while (n) {
      result += n % 10;
      // eslint-disable-next-line no-param-reassign
      n = Math.floor(n / 10);
    }
    // eslint-disable-next-line no-undef
  } while (result >= 10);
  // eslint-disable-next-line no-undef
  return result;
}

module.exports = getSumOfDigits;
