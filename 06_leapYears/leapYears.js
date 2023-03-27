/**
* @method leapYears - Identifies a given year as being a leap year or not.
* @param {number} year - The year that is to be checked if leap year or not.
* @returns {boolean} True if the year is a leap year and false otherwise.
*/
const leapYears = function(year) {
  const divisibleBy100 = year % 100 === 0;
  const divisibleBy400 = year % 400 === 0;
  const divisibleBy4 = year % 4 === 0;

  return divisibleBy100 && divisibleBy400 || !divisibleBy100 && divisibleBy4;
};

// Do not edit below this line
module.exports = leapYears;
