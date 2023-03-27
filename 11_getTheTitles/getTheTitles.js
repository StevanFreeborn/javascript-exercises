/**
* getTheTitles - Returns the titles for all books given.
* @param {Array<{ title:string, author:string }>} books - The books whose titles we want to get.
* @returns {Array<string>} The titles of the books given.
*/
const getTheTitles = function(books) {
  return books.map(book => book?.title);
};

// Do not edit below this line
module.exports = getTheTitles;
