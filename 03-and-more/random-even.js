// Randomizes a number (range 0..100), then prints all the even numbers
// from 0 to the randomized.

function randomEvenNumbers () { // eslint-disable-line no-unused-vars
  var randomNum = Math.floor(Math.random() * 100)

  for (var i = 0; i <= randomNum; i++) {
    if (i % 2 === 0) {
      console.log(i)
    }
  }
}
