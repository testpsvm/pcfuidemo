
// creation d'une factory utilisée pour les déclarations de urls / méthodes REST
// documentation : https://docs.angularjs.org/api/ngResource/service/$resource
var metricsFactory = metricsModule.factory('metricsFactory', ['$resource', function($resource) {
  return $resource('http://localhost:9999/metrics', 
		  {}, 
		  {
			  beans: {method:'GET', url:'http://localhost:9999/beans', isArray:true},
			  metrics: {method:'GET', url:'http://localhost:9999/metrics'},
			  health: {method:'GET', url:'http://localhost:9999/health'}
			  // DEFAULT $resource methods
			  //{ 'get':    {method:'GET'},
			  //  'save':   {method:'POST'},
			  //  'query':  {method:'GET', isArray:true},
			  //  'remove': {method:'DELETE'},
			  //  'delete': {method:'DELETE'} };
	  }
  );
}]);