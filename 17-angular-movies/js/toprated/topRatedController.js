angular.module('movieApp')

  .controller('topRatedController', function ($scope, moviesFactory) {
    $scope.section = 'Top Rated Movies'

    moviesFactory.getTopRatedMovies()
      .then(function (response) {
        $scope.topRatedMovies = response.data.results
      })
  })
