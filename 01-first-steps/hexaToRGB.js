// Writes a function that convert a hexadecimal color, "blue" for example "#0000FF" in its RGB
// representation rgb(0,0,255)". Give the function the name getRGB() and test it with this code

function getRGB (hexaColor) { // eslint-disable-line no-unused-vars
  var r = hexaColor.charAt(1) + hexaColor.charAt(2)
  var g = hexaColor.charAt(3) + hexaColor.charAt(4)
  var b = hexaColor.charAt(5) + hexaColor.charAt(6)
  console.log('rgb(' + parseInt(r, 16) + ', ' + parseInt(g, 16) + ', ' + parseInt(b, 16) + ')')
}
