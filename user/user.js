
// declarationdu module user
var userModule = angular.module('userModule', ['ngResource']);


var userFactory = userModule.factory('userFactory', ['$resource', function($resource) {
  return $resource('http://mtpcfdemo.cfapps.io/user/:userId', {userId : '@userId'});
}]);




// declaration du controller userController
userModule.controller('userController', ['$scope', 'userFactory', function ($scope, userFactory) {
  $scope.userList =   userFactory.query();

  $scope.sortColumn =   'name';
  
  $scope.restCreateActionMessage = '';
  $scope.restDeleteActionMessage = '';

  $scope.newuser = {
	userId:"",
    name:"",
    firstName:"",
    showDel:false
  };

  

  // methods
  $scope.addUser = function (user) {
	  userFactory.save(user).$promise.then(function(data) {
	  	  $scope.userList = userFactory.query();
	      // we reinit the new user attributes
		  $scope.newuser.name= '';
		  $scope.newuser.firstName= '';
		  $scope.newuser.showDel=false;
		  $scope.restCreateActionMessage = 'Creation successful';
	      $scope.restDeleteActionMessage = '';
	  });
  };

  // remove user action
  $scope.removeUser = function (user) {
	  // call the delete remote service
	  userFactory.delete(user).$promise.then(function(data) {
	      $scope.userList = userFactory.query();
	      $scope.restCreateActionMessage = '';
	      $scope.restDeleteActionMessage = data.message;
      });
  };


}]);
