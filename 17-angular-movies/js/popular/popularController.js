angular.module('movieApp')

  .controller('popularController', function ($scope, moviesFactory) {
    $scope.section = 'Popular Movies'

    moviesFactory.getPopularMovies()
      .then(function (response) {
        $scope.popularMovies = response.data.results
      })
  })

