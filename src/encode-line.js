const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let previous = '';
  let counter = 1;
  let result = '';
  str += '.';
  str.split('').forEach(element => {
    if (element === previous) {
      counter++;
    } else {
      if (counter !== 1) {
        result += `${counter}${previous}`;
        counter = 1;
      } else {
        result += `${previous}`
      }
    }
    previous = element;
  })
  return result;
}

module.exports = {
  encodeLine
};
