angular.module('comicApp')
.controller('mainController', function($scope, comicFactory){
	$scope.findTitles = function(findComics){
		$scope.comicInfo = comicFactory.getTitles(findComics)
		console.log($scope.comicInfo)
	}
})