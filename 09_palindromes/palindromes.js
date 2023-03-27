
/**
* palindromes - Indicates whether the given word is a palindromes.
* @param {string} word - The word to check if is a palindrome or not.
* @returns {boolean} True if is a palindromes and false otherwise.
*/
const palindromes = function (word) {
  const wordNormalized = word
  .toLowerCase()
  .replace(/[^a-z]/g, '');

  const normLen = wordNormalized.length;

  for(let i = 0; i < normLen / 2; i++) {
    const nextLeft = wordNormalized[i];
    const nextRight = wordNormalized[normLen - i - 1];

    if (nextLeft !== nextRight) {
      return false;
    }
  }

  return true;
};

// Do not edit below this line
module.exports = palindromes;

palindromes('Animal loots foliated detail of stool lamina.');
