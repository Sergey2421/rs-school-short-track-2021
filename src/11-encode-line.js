/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {unknown[]}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  if (!arr.length) return '';
  let result = '';
  let count = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      count++;
    } else {
      if (count !== 1) result += count + arr[i - 1];
      else result += arr[i - 1];
      count = 1;
    }
  }
  if (count !== 1) result += count + arr[arr.length - 1];
  else result += arr[arr.length - 1];
  return result;
}

module.exports = encodeLine;
