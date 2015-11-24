var app = angular.module("serviceModule");

app.controller("controlDisplay",function($scope,service){
	var nameAndDish = service.get(); 
	$scope.name = nameAndDish.name;
	$scope.dish = nameAndDish.dish;
});