/* Randomizes a number (range 0..100), then prints all the odd
numbers from 40 to that one. If the number was smaller than 40,
print all the numbers down to the randomized one (i.e. if the result
was 37, you should print: 40, 39, 38, 37) */

function randomOddSmallers () { // eslint-disable-line no-unused-vars
  var randomNum = Math.floor(Math.random() * 100)
  if (randomNum > 40) {
    for (var i = 41; i <= randomNum; i++) {
      if (i % 2 !== 0) {
        console.log(i)
      }
    }
  } else {
    for (i = 40; i >= randomNum; i--) {
      console.log(i)
    }
  }
}
