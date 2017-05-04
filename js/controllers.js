angular.module('comicApp')
.controller('mainController', function($scope, $location){
	$scope.findTitles = function(findComics){
		$location.path('/comics/' + findComics)
	}
})
.controller('findController', function($scope, $routeParams, comicFactory){
	let titleToFind = $routeParams.searchTitle
	console.log(titleToFind)
	$scope.comicInfo = comicFactory.getTitles(titleToFind)
})