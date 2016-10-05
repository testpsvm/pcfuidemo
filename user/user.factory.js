
// creation d'une factory utilisée pour les déclarations de urls / méthodes REST
// documentation : https://docs.angularjs.org/api/ngResource/service/$resource
var userFactory = userModule.factory('userFactory', ['$resource', function($resource) {
  return $resource('http://mtpcfdemo.cfapps.io/user/:userId', 
		  {userId : '@userId'}, 
		  {
			  generateUsers: {method:'GET', url:'http://mtpcfdemo.cfapps.io/user/insertDemo', isArray:true},
			  deleteAll: {method:'DELETE', url:'http://mtpcfdemo.cfapps.io/user'}
		  }
  );
}]);