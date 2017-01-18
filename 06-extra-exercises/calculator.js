// Define a function called calculator that receives an operation and two numbers
// and returns the result of the operation applied to the values passed as parameters

function calculator (op, num1, num2) { // eslint-disable-line no-unused-vars
  var sum = function (x, y) {
    return x + y
  }
  var subs = function (x, y) {
    return x - y
  }
  var multi = function (x, y) {
    return x * y
  }
  var div = function (x, y) {
    return x / y
  }
  switch (op) {
    case 'suma':
      return sum(num1, num2)
    case 'resta':
      return subs(num1, num2)
    case 'multiplicacion':
      return multi(num1, num2)
    case 'division':
      return div(num1, num2)
    default:
      console.log('Please especify a valid operator!')
      break
  }
}
