angular.module('movieApp')

  .controller('upComingController', function ($scope, moviesFactory) {
    $scope.section = 'Upcoming Movies'

    moviesFactory.getUpComingMovies()
      .then(function (response) {
        $scope.upcomingMovies = response.data.results
        console.log(response.data.results)
      })
  })

