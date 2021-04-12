/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let i;
  return s1.split('').reduce((sum, elem) => {
    // eslint-disable-next-line no-cond-assign
    if ((i = s2.indexOf(elem, 0)) !== -1) {
      // eslint-disable-next-line no-param-reassign
      s2 = s2.slice(0, i) + s2.slice(i + 1);
      return sum + 1;
    }
    return sum;
  }, 0);
}

module.exports = getCommonCharacterCount;
