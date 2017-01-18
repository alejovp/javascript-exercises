// Improve the previous function to add a random number between 0 and 1000 every 7 characters

function encodeWord (sValue) { // eslint-disable-line no-unused-vars
  var newWord = ''
  var randomNum = function () {
    return Math.floor(Math.random() * 1000 + 1)
  }
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
  if (newWord.length < 7) {
    return newWord
  } else {
    return newWord.slice(0, 7) + randomNum() + encodeWord(sValue.slice(7))
  }
}
