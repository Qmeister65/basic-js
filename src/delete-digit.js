const { NotImplementedError } = require('../extensions/index.js');

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
  let numberArray = n.toString().split('');
  for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] < numberArray[i + 1]) {
      delete numberArray[i];
      return +(numberArray.join(''));
    }
  }
  delete numberArray[numberArray.length - 1]
  return +(numberArray.join(''));
}

module.exports = {
  deleteDigit
};
