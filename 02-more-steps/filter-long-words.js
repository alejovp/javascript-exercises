// Write a function filterLongWords() that takes an array of words and an
// integer i and returns the array of words that are longer than i.

function filterLongWords (arrayWords, minLength) { // eslint-disable-line no-unused-vars
  function checkWordLength (word) {
    return word.length > minLength
  }

  return arrayWords.filter(checkWordLength)
}
