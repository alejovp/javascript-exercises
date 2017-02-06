angular.module('movieApp')

  // var moviePath = 'https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US'

  .factory('moviesFactory', function ($http) {
    function getPopularMovies () {
      var url = 'https://api.themoviedb.org/3/movie/popular?api_key=00f0480fe0a0b8ccbca6551eaf7c7fc0'
      return $http.get(url)
    }

    function getUpComingMovies () {
      var url = 'https://api.themoviedb.org/3/movie/upcoming?api_key=00f0480fe0a0b8ccbca6551eaf7c7fc0'
      return $http.get(url)
    }

    function getNowPlayingMovies () {
      var url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=00f0480fe0a0b8ccbca6551eaf7c7fc0'
      return $http.get(url)
    }

    function getTopRatedMovies () {
      var url = 'https://api.themoviedb.org/3/movie/top_rated?api_key=00f0480fe0a0b8ccbca6551eaf7c7fc0'
      return $http.get(url)
    }

    return {
      getPopularMovies: getPopularMovies,
      getUpComingMovies: getUpComingMovies,
      getNowPlayingMovies: getNowPlayingMovies,
      getTopRatedMovies: getTopRatedMovies
    }
  })
