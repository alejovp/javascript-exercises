/* Randomizes two numbers and prints the smallest number
that is greater than one, such that both numbers are
divided by it with no remainder. For instance, for 9 and
6 you should print 3. If there isn't one a proper note
should be printed. */

function randomSmallest () { // eslint-disable-line no-unused-vars
  var random1 = Math.floor(Math.random() * 100)
  var random2 = Math.floor(Math.random() * 100)
  var minNumber = Math.min(random1, random2)
  var remainder1 = (random1 % minNumber === 0)
  var remainder2 = (random2 % minNumber === 0)
  if (minNumber === 1) {
    console.log('The smallest number is equal to "1", try again!')
  } else if (minNumber > 1 && remainder1 && remainder2) {
    console.log(minNumber)
  } else {
    console.log(random1 + ' and ' + random2 +
      ' are not multiples, try again!')
  }
}
