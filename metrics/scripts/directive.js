metricsModule.directive('metricslist', function() {
	return {
		restrict : 'E',
		templateUrl : 'metrics/templates/metricsList.html'
	};
})

metricsModule.directive('healthlist', function() {
	return {
		restrict : 'E',
		templateUrl : 'metrics/templates/healthList.html'
	};
})