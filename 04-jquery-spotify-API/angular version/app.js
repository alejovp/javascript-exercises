var spotifyApp = angular.module('spotifyApp', [])

spotifyApp.controller('searchController', function ($scope, $http) {
  $scope.searchArtist = function (e) {
    e.preventDefault()
    var userArtist = $scope.search
    var url = 'https://api.spotify.com/v1/search?type=artist&query=<%ARTIST-NAME%>'
    var urlFilled = url.replace('<%ARTIST-NAME%>', userArtist)

    $http.get(urlFilled)
      .then(funci)

    // console.log(userArtist)
  }
})
