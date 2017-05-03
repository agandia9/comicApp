angular.module('comicService', [])
.factory('comicFactory', function($http){
	var getTitles = function (findComics){
		console.log(findComics)
		return findComics + ' :D'
	}

	return {
		getTitles: getTitles
	}
})