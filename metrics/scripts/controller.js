// declaration du controller metricsController
metricsModule.controller('metricsController', [ '$scope', 'metricsFactory',
		function($scope, metricsFactory) {

			$scope.metricsList = [];
			$scope.healthList = [];
			
			$scope.metricsSortColumn = 'key';
			$scope.healthSortColumn = 'key';


			$scope.updateMetrics = function() {
				$scope.metricsList = [];
				metricsFactory.metrics().$promise.then(function(data) {
					angular.forEach(data, function(value, key) {
						var metric = {
							key : key,
							value : value
						};
						// we don't need the $ key
						if (!metric.key.startsWith('$')){
							$scope.metricsList.push(metric);
						}
					})
				})
			}


			$scope.updateHealth = function() {
				$scope.healthList = [];
				metricsFactory.health().$promise.then(function(data) {
					angular.forEach(data, function(value, key) {
						var health = {
							key : key,
							value : value
						};
						// we don't need the $ key
						if (!health.key.startsWith('$')){
							$scope.healthList.push(health);
						}
					})
				})
			}
		} ]);