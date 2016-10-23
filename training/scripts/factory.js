
// creation d'une factory utilisée pour les déclarations de urls / méthodes REST
// documentation : https://docs.angularjs.org/api/ngResource/service/$resource
var trainingFactory = trainingModule.factory('trainingFactory', ['$resource', 'BACK_END_URL', function($resource, BACK_END_URL) {
  return $resource(BACK_END_URL+'/training/:id', 
		  {id : '@id'}, 
		  {
			  generateTrainings: {method:'GET', url:BACK_END_URL+'/training/insertDemo', isArray:true},
			  deleteAll: {method:'DELETE', url:BACK_END_URL+'/training'}
			  // DEFAULT $resource methods
			  //{ 'get':    {method:'GET'},
			  //  'save':   {method:'POST'},
			  //  'query':  {method:'GET', isArray:true},
			  //  'remove': {method:'DELETE'},
			  //  'delete': {method:'DELETE'} };
	  }
  );
}]);