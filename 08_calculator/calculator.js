const add = function (firstAddend, secondAddend) {
    return firstAddend + secondAddend;
};

const subtract = function (firstSubtrahend, secondSubtrahend) {
    return firstSubtrahend - secondSubtrahend;
};

const sum = function (nums) {
    return nums.reduce((sum, num) => sum + num, 0);
};

const multiply = function (nums) {
    return nums.reduce((total, num) => total * num);
};

const power = function (base, exponent) {
    return Math.pow(base, exponent)
};

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
