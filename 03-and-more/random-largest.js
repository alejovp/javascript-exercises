// Randomizes three numbers in range (0.. 100) and prints the largest one.

var num1 = Math.floor(Math.random() * 100)
console.log(num1)
var num2 = Math.floor(Math.random() * 100)
console.log(num2)
var num3 = Math.floor(Math.random() * 100)
console.log(num3)

function printLargestNum (num1, num2, num3) { // eslint-disable-line no-unused-vars
  var maxNum = Math.max.apply(null, arguments)
  console.log(maxNum)
}
