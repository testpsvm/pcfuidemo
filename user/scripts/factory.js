
// creation d'une factory utilisée pour les déclarations de urls / méthodes REST
// documentation : https://docs.angularjs.org/api/ngResource/service/$resource
var userFactory = userModule.factory('userFactory', ['$resource', 'BACK_END_URL', function($resource, BACK_END_URL) {
  return $resource(BACK_END_URL+'/user/:userId', 
		  {userId : '@userId'}, 
		  {
			  generateUsers: {method:'GET', url:BACK_END_URL+'/user/insertDemo', isArray:true},
			  deleteAll: {method:'DELETE', url:BACK_END_URL+'/user'}
			  // DEFAULT $resource methods
			  //{ 'get':    {method:'GET'},
			  //  'save':   {method:'POST'},
			  //  'query':  {method:'GET', isArray:true},
			  //  'remove': {method:'DELETE'},
			  //  'delete': {method:'DELETE'} };
	  }
  );
}]);