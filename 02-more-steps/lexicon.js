// Represent a small bilingual lexicon as a Javascript object in the following
// fashion {"merry":"god", "christmas":"jul", "and":"och", "happy":gott", "new":"nytt",
// "year":"år"} and use it to translate your Christmas cards from English into Swedish.

// Using hasOwnProperty
function translateCard (originalText) { // eslint-disable-line no-unused-vars
  var lexicon = {merry: 'god', christmas: 'jul', and: 'och', happy: 'gott', new: 'nytt', year: 'år'}
  var arrayText = originalText.split(' ')

  // If a word is not contained in lexicon return the same word (this is optional)
  function changeWord (word) {
    if (lexicon.hasOwnProperty(word)) {
      return lexicon[word]
    } else {
      return word
    }
  }

  var newArray = arrayText.map(changeWord)
  var transText = newArray.join(' ')
  return transText
}

// Traversing the object with a for in loop
function translateCardPlus (originalText) { // eslint-disable-line no-unused-vars
  var lexicon = {merry: 'god', christmas: 'jul', and: 'och', happy: 'gott', new: 'nytt', year: 'år'}
  var arrayText = originalText.split(' ')

  // If a word is not contained in lexicon return the same word (this is optional)
  function checkWord (word) {
    var result = word
    for (var prop in lexicon) {
      if (prop === word.toLowerCase()) {
        result = lexicon[prop]
      } else if (prop + '!' === word.toLowerCase()) {
        result = lexicon[prop] + '!'
      }
    }
    return result
  }

  var newArray = arrayText.map(checkWord)
  var transText = newArray.join(' ')
  return transText
}
