/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let result = 0;
  let flag;
  result = matrix.reduce((sum, elem) => sum + elem.reduce((sum2, elem2) => sum2 + elem2, 0), 0);
  for (let j = 0; j < matrix[0].length; j++) {
    flag = 0;
    for (let i = 0; i < matrix.length; i++) {
      if (flag !== 0 || matrix[i][j] === 0) {
        flag = 1;
        result -= matrix[i][j];
      }
    }
  }
  return result;
}

module.exports = getMatrixElementsSum;
