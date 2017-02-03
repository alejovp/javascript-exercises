 $('#search-artists form').on('submit', function (e) {
   e.preventDefault()
   var urlSearch = 'https://api.spotify.com/v1/search?type=artist&query=<%ARTIST-NAME%>'
   var valueSearched = $(this).find('input').val()
   var urlFilled = urlSearch.replace('<%ARTIST-NAME%>', valueSearched)

   $.ajax({
     url: urlFilled
   })
    .done(function (response) {
      var listArtists = response.artists.items
      var optionsArtists = listArtists.map(function (elem) {
        return "<option value='" + elem.id + "'>" + elem.name + '</option>'
      })
      optionsArtists.unshift('<option selected disabled>choose one of the list</option>')
      $('#list-artists').html(optionsArtists.join(''))
    })
 })

 $('#select-artist form').on('change', function (e) {
   e.preventDefault()
   var idArtist = $('#list-artists').val()
   var urlSearch = 'https://api.spotify.com/v1/artists/<ID-ARTIST>/albums'
   var urlFilled = urlSearch.replace('<ID-ARTIST>', idArtist)
   $.ajax({
     url: urlFilled
   })
  .done(function (response) {
    var listAlbums = response.items
    var optionsAlbums = listAlbums.map(function (elem) {
      return "<option value='" + elem.id + "'>" + elem.name + '</option>'
    })
    optionsAlbums.unshift('<option selected disabled>choose one of the list</option>')
    $('#list-albums').html(optionsAlbums.join(''))
  })
 })

 $('#select-album form').on('change', function (e) {
   e.preventDefault()
   var idAlbum = $('#list-albums').val()
   var urlSearch = 'https://api.spotify.com/v1/albums/<ID-ALBUM>/tracks'
   var urlFilled = urlSearch.replace('<ID-ALBUM>', idAlbum)
   $.ajax({
     url: urlFilled
   })
  .done(function (response) {
    var listTracks = response.items
    var optionsTracks = listTracks.map(function (elem) {
      return "<li id='" + elem.id + "'><a href='" + elem.preview_url + "'>" + elem.name + '</a></li>'
    })
    $('#list-tracks').html(optionsTracks.join(''))
  })
 })
