/* Define a function called calculator that receives an operation and several
numbers (can be 2 or 10 or whatever) returns the result of the operation applied
to the values passed as parameters */

function calculator (op) { // eslint-disable-line no-unused-vars
  var result
  switch (op) {
    case 'suma':
      result = 0
      for (var i = 1; i < arguments.length; i++) {
        result += arguments[i]
      }
      break
    case 'resta':
      result = arguments[1]
      for (var j = 2; j < arguments.length; j++) {
        result -= arguments[j]
      }
      break
    case 'multiplicacion':
      result = 1
      for (var k = 1; k < arguments.length; k++) {
        result *= arguments[k]
      }
      break
    case 'division':
      result = arguments[1]
      for (var l = 2; l < arguments.length; l++) {
        result /= arguments[l]
      }
      break
    default:
      console.log('Please especify a valid operator!')
      break
  }
  return result
}
