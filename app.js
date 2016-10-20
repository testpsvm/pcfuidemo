// declaration du module de l'application
var app = angular.module('pcfuidemo', [ 'ngResource', 'ngRoute', 'userModule',
		'trainingModule', 'metricsModule' ]);

app.config(function($routeProvider) {
	$routeProvider
	.when('/trainingMain', {
		templateUrl : 'training/templates/trainingMain.html',
		controller : 'trainingController'
	}).when('/userMain', {
		templateUrl : 'user/templates/userMain.html',
		controller : 'userController'
	}).when('/metricsMain', {
		templateUrl : 'metrics/templates/metricsMain.html',
		controller : 'metricsController'
	});
});