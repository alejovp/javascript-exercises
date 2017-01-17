// Improves the previous function so besides the conversion also identifies some basic colors:

function getRGB (hexaColor) { // eslint-disable-line no-unused-vars
  var r = hexaColor.charAt(1) + hexaColor.charAt(2)
  var g = hexaColor.charAt(3) + hexaColor.charAt(4)
  var b = hexaColor.charAt(5) + hexaColor.charAt(6)
  var aBasicColors = [['#000000', 'Black'], ['#FFFFFF', 'White'], ['#FF0000', 'Red'], ['#00FF00', 'Green'], ['#0000FF', 'Blue']]
  var sBasicColor = ''
  for (var i = 0; i < aBasicColors.length; i++) {
    if (aBasicColors[i][0] === hexaColor) {
      sBasicColor = aBasicColors[i][1]
    }
  }
  if (sBasicColor === '') {
    console.log('rgb(' + parseInt(r, 16) + ', ' + parseInt(g, 16) + ', ' + parseInt(b, 16) + ')')
  } else {
    console.log('rgb(' + parseInt(r, 16) + ', ' + parseInt(g, 16) + ', ' + parseInt(b, 16) + ')' + ' ' + sBasicColor)
  }
}
