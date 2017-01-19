// Write a function findLongestWord() that takes an array of words and returns
// the length of the longest one.

function findLongestWord (arrayWords) { // eslint-disable-line no-unused-vars
  var lengthsArray = arrayWords.map(function (element) {
    return element.length
  })
  return Math.max.apply(null, lengthsArray)
}
