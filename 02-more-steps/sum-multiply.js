// Define a function sum() and a function multiply() that sums and multiplies
// (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should
// return 10, and multiply([1,2,3,4]) should return 24.

// Functional approach
function sum (aNumbers) { // eslint-disable-line no-unused-vars
  function innerSum (acc, numbers) { // eslint-disable-line no-unused-vars
    if (numbers.length === 0) {
      return acc
    } else {
      acc += numbers[0]
      return innerSum(acc, numbers.slice(1))
    }
  }
  return innerSum(0, aNumbers)
}

function multiply (aNumbers) { // eslint-disable-line no-unused-vars
  function innerMult (acc, numbers) { // eslint-disable-line no-unused-vars
    if (numbers.length === 0) {
      return acc
    } else {
      acc *= numbers[0]
      return innerMult(acc, numbers.slice(1))
    }
  }
  return innerMult(1, aNumbers)
}
