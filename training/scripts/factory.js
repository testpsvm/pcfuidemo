
// creation d'une factory utilisée pour les déclarations de urls / méthodes REST
// documentation : https://docs.angularjs.org/api/ngResource/service/$resource
var trainingFactory = trainingModule.factory('trainingFactory', ['$resource', function($resource) {
  return $resource('https://localhost:8443/training/:id', 
		  {id : '@id'}, 
		  {
			  generateTrainings: {method:'GET', url:'https://localhost:8443/training/insertDemo', isArray:true},
			  deleteAll: {method:'DELETE', url:'https://localhost:8443/training'}
			  // DEFAULT $resource methods
			  //{ 'get':    {method:'GET'},
			  //  'save':   {method:'POST'},
			  //  'query':  {method:'GET', isArray:true},
			  //  'remove': {method:'DELETE'},
			  //  'delete': {method:'DELETE'} };
	  }
  );
}]);