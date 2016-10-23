// declaration du module de l'application
var app = angular.module('pcfuidemo', [ 'ngResource', 'ngRoute',
		'userModule', 'trainingModule', 'metricsModule' ]);

app.config(function($routeProvider) {
	$routeProvider.when('/trainingMain', {
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

app.config([
				'$httpProvider',
				function($httpProvider) {
					// initialize get if not there
					if (!$httpProvider.defaults.headers.get) {
						$httpProvider.defaults.headers.get = {};
					}

					// Answer edited to include suggestions from comments
					// because previous version of code introduced
					// browser-related errors

					// disable IE ajax request caching
					$httpProvider.defaults.headers.get['If-Modified-Since'] = 'Mon, 26 Jul 1997 05:00:00 GMT';
					// extra
					$httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
					$httpProvider.defaults.headers.get['Pragma'] = 'no-cache';
				} ]);

// declaration des constantes
app.constant('BACK_END_URL', 'http://mtpcfdemo.cfapps.io');
