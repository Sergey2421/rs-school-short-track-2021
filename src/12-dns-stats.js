/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 * [
 * [ru, ya, code]
 * [ru, ya, music]
 * [ru]
 * ]
 *
 */
function getDNSStats(domains) {
  const obj = {};
  const arr = domains.map((elem) => elem.split('.').reverse());
  arr.forEach((elem) => {
    elem.reduce((acc, elem2) => {
      // eslint-disable-next-line no-param-reassign
      acc += `.${elem2}`;
      if (acc in obj) obj[acc]++;
      else obj[acc] = 1;
      return acc;
    }, '');
  });
  return obj;
}

module.exports = getDNSStats;
