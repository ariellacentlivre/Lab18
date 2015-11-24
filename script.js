var app= angular.module("serviceModule",["ngRoute"]);

app.config(function($routeProvider){
	$routeProvider.when("/input",
		{
			templateUrl:"input.html",
			controller:"controlInput"

		})
	
		.when("/display",
		{
			templateUrl:"display.html",
			controller:"controlDisplay"
		})

		.otherwise({redirectTo:"/input"});


});