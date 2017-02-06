angular.module('movieApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'templates/popular.html',
        controller: 'popularController'
      })
      .when('/upcoming', {
        templateUrl: 'templates/upcoming.html',
        controller: 'upComingController'
      })
      .when('/nowPlaying', {
        templateUrl: 'templates/nowplaying.html',
        controller: 'nowPlayingController'
      })
      .when('/topRated', {
        templateUrl: 'templates/toprated.html',
        controller: 'topRatedController'
      })
  })
