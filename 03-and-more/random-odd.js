// Randomizes a number (range 0..100), then prints all the
// odd numbers from 40 to that one. If the number was smaller
// than 40 nothing should be printed

function randomOddNumbers () { // eslint-disable-line no-unused-vars
  var randomNum = Math.floor(Math.random() * 100)

  for (var i = 41; i <= randomNum; i++) {
    if (randomNum > 40 && i % 2 !== 0) {
      console.log(i)
    }
  }
}

