/* Randomizes a number n in range 0..100. Now randomizes
n more numbers in that range, printing the largest of them. */

function randomN () { // eslint-disable-line no-unused-vars
  var n = Math.floor(Math.random() * 100)
  var randomNumbers = []
  if (n === 0) return randomNumbers
  for (var i = 0; i < n; i++) {
    randomNumbers.push(Math.floor(Math.random() * 100))
  }
  var result = Math.max.apply(null, randomNumbers)
  console.log(result)
}
