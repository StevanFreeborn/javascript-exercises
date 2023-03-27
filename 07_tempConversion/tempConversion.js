/**
* convertToCelsius - Given a temperature in farenheit convert it to celsius.
* @param {number} tempInFarenheit - The temperature to be converted in farenheit.
* @returns {number} The temperature converted to celsius.
*/
const convertToCelsius = function(tempInFarenheit) {
  return Math.round(
    ((tempInFarenheit - 32) * (5/9)) * 10
  ) / 10;
};

/**
* convertToFahrenheit - Given a temperature in celsius convert it to farenheit.
* @param {number} tempInCelsius - The temperature to be converted in celsius.
* @returns {number} The temperature converted to farenheit.
*/
const convertToFahrenheit = function(tempInCelsius) {
  return Math.round(
    ((tempInCelsius * (9/5)) + 32) * 10
  ) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
