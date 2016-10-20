
// creation d'une factory utilisée pour les déclarations de urls / méthodes REST
// documentation : https://docs.angularjs.org/api/ngResource/service/$resource
var userFactory = userModule.factory('userFactory', ['$resource', function($resource) {
  return $resource('https://localhost:8443/user/:userId', 
		  {userId : '@userId'}, 
		  {
			  generateUsers: {method:'GET', url:'https://localhost:8443/user/insertDemo', isArray:true},
			  deleteAll: {method:'DELETE', url:'https://localhost:8443/user'}
			  // DEFAULT $resource methods
			  //{ 'get':    {method:'GET'},
			  //  'save':   {method:'POST'},
			  //  'query':  {method:'GET', isArray:true},
			  //  'remove': {method:'DELETE'},
			  //  'delete': {method:'DELETE'} };
	  }
  );
}]);