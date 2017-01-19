// Define a function reverse() that computes the reversal of a string.
// For example, reverse("jag testar") should return the string "ratset gaj".

function reverse (sInput) { // eslint-disable-line no-unused-vars
  var newString = ''
  for (var i = 0; i < sInput.length; i++) {
    newString = sInput[i] + newString
  }
  return newString
}
