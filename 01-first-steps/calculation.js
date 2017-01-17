// Write a program that writes in the console all the multiples of 23 less than 500
// and at the end writes the sum of all of them

function multiples () { // eslint-disable-line no-unused-vars
  var sResult = 'Elements = '
  var nSum = 0
  var multiple = 0
  for (var i = 0; multiple < 500 - 23; i++) {
    multiple = 23 * i
    sResult += multiple + ' '
    nSum += multiple
  }
  return (sResult + '\n' + 'Sum = ' + nSum)
}
