// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

function isVowel (argument) { // eslint-disable-line no-unused-vars
  var vowels = /^[aeiou]*$/
  if (argument.toLowerCase().match(vowels)) {
    return true
  } else {
    return false
  }
}
