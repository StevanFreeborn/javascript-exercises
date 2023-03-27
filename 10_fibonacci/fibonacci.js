/**
* fibonacci - Returns the number in the fibonacci sequence at the given index.
* @param {number | string} sequenceIndex - The index value for the number you want to return.
* @returns {number | string} The number in the sequence at the given index. Or a string indicating an error.
*/
const fibonacci = function(sequenceIndex) {
  sequenceIndex = parseInt(sequenceIndex);

  if (sequenceIndex < 0) {
    return 'OOPS';
  }

  if (sequenceIndex === 0) {
    return 0;
  }

  let prev = 0;
  let curr = 1;

  while (sequenceIndex > 1) {
    let temp = prev;
    prev = curr;
    curr += temp;
    sequenceIndex--;
  }

  return curr;
};

// Do not edit below this line
module.exports = fibonacci;
