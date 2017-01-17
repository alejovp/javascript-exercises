// Write a function that writes in the console the multiplication table (from 1 to 10)

function multiTable () { // eslint-disable-line no-unused-vars
  var sTable = ''
  var sRow = ''
  var sNum = ''
  for (var i = 1; i <= 10; i++) {
    for (var j = 1; j <= 10; j++) {
      sNum = '' + (i * j)
      if (sNum.length === 1) {
        sRow += sNum + '   '
      } else if (sNum.length === 2) {
        sRow += sNum + '  '
      } else {
        sRow += sNum + ' '
      }
    }
    sTable += sRow + '\n'
    sRow = ''
  }
  console.log(sTable)
}
