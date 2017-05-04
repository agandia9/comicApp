angular.module('comicApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/comics/:searchTitle', {
        templateUrl: 'templates/comicsFound.html',
        controller: 'findController'
      }).otherwise({ redirectTo: '/' })
  })
