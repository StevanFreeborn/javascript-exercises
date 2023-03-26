/**
 * @method repeatString - repeats a string a given number of times
 * @param {string} string - string to repeat
 * @param {number} numberOfRepeats - number of times to repeat the string
 * @returns {string} - the repeated string
 */
const repeatString = function (string, numberOfRepeats) {
  // using a loop
  let result = '';

  if (numberOfRepeats < 0) {
    return 'ERROR';
  }

  for (const num in [...new Array(numberOfRepeats).keys()]) {
    result += string;
  }

  return result;

  // not using a loop
  // if (numberOfRepeats < 0) {
  //   return 'ERROR';
  // }

  // return string.repeat(numberOfRepeats);
};

// Do not edit below this line
module.exports = repeatString;
