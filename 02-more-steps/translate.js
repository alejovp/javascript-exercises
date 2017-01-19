// Write a function translate() that will translate a text into "rövarspråket".
// That is, double every consonant and place an occurrence of "o" in between. For example,
// translate("this is fun") should return the string "tothohisos isos fofunon".

function translate (text) { // eslint-disable-line no-unused-vars
  var consonants = /^[b-df-hj-np-tv-zñ]*$/
  var newText = ''
  for (var i = 0; i < text.length; i++) {
    if (text[i].toLocaleLowerCase().match(consonants)) {
      newText += text[i] + 'o' + text[i]
    } else {
      newText += text[i]
    }
  }
  return newText
}

// Only with RegExp
function translateR (text) { // eslint-disable-line no-unused-vars
  // return text.replace(/[^a,e,i,o,u]/g, '$&' + 'o' + '$&')
  return text.replace(/[b-df-hj-np-tv-zñ]/gi, '$&' + 'o' + '$&')
}
