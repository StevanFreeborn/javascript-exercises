/**
 * @method removeFromArray - removes elements from an array
 * @param {array} array
 * @param  {...any} values
 * @returns {array} - the array with the values removed
 */
const removeFromArray = function (array, ...values) {
  return array.filter(element => values.includes(element) === false);
};

// Do not edit below this line
module.exports = removeFromArray;
