// Write a function charFreq() that takes a string and builds a
// frequency listing of the characters contained in it. Represent the frequency
// listing as a Javascript object. Try it with something like
// charFreq("abbabcbdbabdbdbabababcbcbab").

function charFreq (text) { // eslint-disable-line no-unused-vars
  var charList = {}
  var currentChar
  for (var char = 0; char < text.length; char++) {
    currentChar = text[char]
    if (charList.hasOwnProperty(currentChar)) {
      charList[currentChar]++
    } else {
      charList[currentChar] = 1
    }
  }
  return charList
}
