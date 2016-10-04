
// declarationdu module user
var userModule = angular.module('userModule', ['ngResource']);


var userFactory = userModule.factory('userFactory', ['$resource', function($resource) {
  return $resource('http://localhost:9999/user/:userId', {userId : '@userId'});
}]);




// declaration du controller userController
userModule.controller('userController', ['$scope', 'userFactory', function ($scope, userFactory) {
  $scope.userList =   userFactory.query();

  $scope.restActionMessage = '';

  $scope.newuser = {
    name:"",
    firstName:"",
    showDel:false
  };



  // methods
  $scope.addUser = function (user) {
      // we push the new values
      $scope.userList.push({name:user.name, firstName:user.firstName, showDel:false});
      // we reinit the new user attributes
      $scope.newuser.name= '';
      $scope.newuser.firstName= '';
      $scope.newuser.showDel=false;
  };

  $scope.removeUser = function (user) {
        //var index = $scope.userList.indexOf(user);
        //$scope.userList.splice(index, 1);
        userFactory.delete(user.userId);
        restActionMessage = 'ok';
  };


}]);
