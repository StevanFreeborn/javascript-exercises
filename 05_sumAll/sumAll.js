/**
 * @method sumAll - Sums all numbers in the given range.
 * @param {number} start - The start value of the range.
 * @param {number} end - The end value of the range.
 * @returns {number} - The sum of the given range.
 */
const sumAll = function (start, end) {
  if (
    typeof start !== 'number' ||
    typeof end !== 'number' ||
    start < 0 ||
    end < 0
  ) {
    return 'ERROR';
  }

  let result = 0;

  if (start > end) {
    const temp = start;
    start = end;
    end = temp;
  }

  for (start; start <= end; start++) {
    result += start;
  }

  return result;
};

// Do not edit below this line
module.exports = sumAll;
