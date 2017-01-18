// Define a function called ​encodeWord​ that receives a string and return the codified version of
// that string replacing the following characters:
// 7 instead of T
// 4 instead of A
// 5 instead of S
// 0 instead of O

function encodeWord (sValue) { // eslint-disable-line no-unused-vars
  var newWord = ''
  for (var i = 0; i < sValue.length; i++) {
    switch (sValue.charAt(i)) {
      case 'T':
        newWord += '7'
        break
      case 'A':
        newWord += '4'
        break
      case 'S':
        newWord += '5'
        break
      case 'O':
        newWord += '0'
        break
      default:
        newWord += sValue.charAt(i)
        break
    }
  }
  return newWord
}
