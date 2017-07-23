angular.module("kB")

.controller('CategoriesCtrl', ['$scope','$http', function($scope, $http){
	$http.get('/categories').then(function(res){
        console.log(res.data);
		$scope.categories = res.data;
	});
}]);