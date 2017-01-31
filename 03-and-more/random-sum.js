// Randomizes a number (range 1000 .. 9999 ) and calculate the
// sum of its digits. For instance, if the randomized number
// was 1049, program should print 14

function randomSum () { // eslint-disable-line no-unused-vars
  var randomNum = Math.floor(Math.random() * 9000) + 1000
  var aNumber = randomNum.toString().split('')
  return aNumber.reduce(function (acc, elem) {
    return acc + Number(elem)
  }, 0)
}

function randomOne () { // eslint-disable-line no-unused-vars
  var randomNum, aNumbers, result
  randomNum = Math.floor(Math.random() * 9000) + 1000
  aNumbers = randomNum.toString().split('')
  result = 0
  for (var i = 0; i < aNumbers.length - 1; i++) {
    result += Number(aNumbers[i])
  }
  return result
}
