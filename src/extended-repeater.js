const {NotImplementedError} = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let {
    repeatTimes: repeatTimes,
    separator: separator,
    addition: addition,
    additionRepeatTimes: additionRepeatTimes,
    additionSeparator: additionSeparator
  } = options;
  let resultArray = [];
  if (!repeatTimes) repeatTimes = 1;
  if (!additionRepeatTimes) additionRepeatTimes = 1;
  if (!separator) separator = '+';
  if (!additionSeparator) additionSeparator = '|';
  if (addition === undefined) addition = '';
  if (addition === null) addition = 'null';
  if (addition && typeof addition !== 'string') String(addition);
  for ( let i = 0; i < additionRepeatTimes; i++) {
    resultArray.push(addition);
  }
  addition = resultArray.join(additionSeparator);
  resultArray = []
  for (let i = 0; i < repeatTimes; i++) {
    resultArray.push(str + addition)
  }
  return resultArray.join(separator)
}

module.exports = {
    repeater
};
