// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.

function maxOfThree (num1, num2, num3) { // eslint-disable-line no-unused-vars
  if (num1 > num2 && num1 > num3) {
    return num1
  } else if (num2 > num1 && num2 > num3) {
    return num2
  } else {
    return num3
  }
}
