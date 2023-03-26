/**
 * @method reverseString - reverses a string
 * @param {string} string - string to reverse
 * @returns {string} - the reversed string
 */
const reverseString = function (string) {
  return string.split('').reverse().join('');
};

// Do not edit below this line
module.exports = reverseString;
