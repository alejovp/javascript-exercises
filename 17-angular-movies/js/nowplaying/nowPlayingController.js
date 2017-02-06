angular.module('movieApp')

  .controller('nowPlayingController', function ($scope, moviesFactory) {
    $scope.section = 'Now Playing Movies'

    moviesFactory.getNowPlayingMovies()
      .then(function (response) {
        $scope.nowPlayingMovies = response.data.results
      })
  })
