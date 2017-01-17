/* Write a function that writes in the console the multiplication table (in one column)
of any number passed as parameter */

function multiTable (num) { // eslint-disable-line no-unused-vars
  var sColumn = ''
  for (var i = 0; i <= 9; i++) {
    sColumn += num + ' * ' + i + ' = ' + (num * i) + '\n'
  }
  console.log(sColumn)
}
