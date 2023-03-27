/**
 * getAge - Gets the age of the given person based upon birth year and death year or current year if not yet dead.
 * @param {{ name:string, yearOfBirth:number, yearOfDeath:number }} person - The person whose age is to be calculated.
 * @returns {number} The age of the person.
 */
const getAge = function (person) {
    const currentYear = new Date().getFullYear();
    const yearOfDeath = person.yearOfDeath ?? currentYear;
    return yearOfDeath - person.yearOfBirth;
}

/**
 * findTheOldest - Gets the oldest person in the given collection of people.
 * @param {Array<{ name:string, yearOfBirth:number, yearOfDeath:number, }>} people - The collection of people who you want to find the oldest person in.
 * @returns {{ name:string, yearOfBirth:number, yearOfDeath:number, }} The oldest person in the collection.
 */
const findTheOldest = function (people) {
  return people.reduce(
    (prev, curr) =>
      getAge(curr) > getAge(prev)
      ? curr
      : prev
  );
};

// Do not edit below this line
module.exports = findTheOldest;
