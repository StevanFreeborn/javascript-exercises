/**
* add - Returns the sum of two numbers.
* @param {number} firstAddend - The first number you want to add.
* @param {number} secondAddend - The second number you want to add.
* @returns {number} The sum of the two addends given.
*/
const add = function (firstAddend, secondAddend) {
    return firstAddend + secondAddend;
};

/**
* subtract - Returns the difference between two numbers.
* @param {number} firstSubtrahend - The first number you want to subtract from.
* @param {number} secondSubtrahend - The number you want to subtract.
* @returns {number} The difference between the two subtrahends given.
*/
const subtract = function (firstSubtrahend, secondSubtrahend) {
    return firstSubtrahend - secondSubtrahend;
};

/**
* sum - Returns the total sum of the numbers given.
* @param {Array<number>} nums - The numbers you want to sum.
* @returns {number} The result of adding all the given numbers together.
*/
const sum = function (nums) {
    return nums.reduce((sum, num) => sum + num, 0);
};

/**
* multiply - Returns the product of the numbers given.
* @param {Array<number>} nums - The numbers you want to multiply.
* @returns {number} The result of multiplying all the given numbers to each other.
*/
const multiply = function (nums) {
    return nums.reduce((total, num) => total * num);
};

/**
* power - Returns the given base raised to the given exponent.
* @param {number} base - The number you want to raise.
* @param {number} exponent - The number you want to raise the base to.
* @returns {number} The result of raising the given base to the given exponent
*/
const power = function (base, exponent) {
    return Math.pow(base, exponent)
};

/**
* factorial - Returns the factorial of the given number.
* @param {number} number - The number whose factorial you want to return.
* @returns {number} The factorial of the given number.
*/
const factorial = function (number) {

  if (number === 0) {
    return 1;
  }

  for (let i = number; i > 1; i--) {
      number *= i - 1;
  }

  return number;
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial
};
