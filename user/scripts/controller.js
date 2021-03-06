
// declaration du controller userController
userModule.controller('userController', ['$scope', 'userFactory', function ($scope, userFactory) {
	
	// la liste des utilisateurs
	$scope.userList = userFactory.query();

	// le parametre utilisé pour les tris
	$scope.sortColumn =   'name';
  
	// message sur une action de création
	$scope.restCreateActionMessage = '';
	// message sur une action de suppression
	$scope.restDeleteActionMessage = '';

	// initialisation de l'"object" nouvel utilisateur
	$scope.newuser = {
		userId:"",
		name:"",
		firstName:"",
		showDel:false
	};  
	
	
	// initialisation de l'"object" detail utilisateur
	$scope.detail = {
		userId:"",
		name:"",
		firstName:"",
		showDel:false
	};

	// méthode d'ajout d'un utilisateur
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
  
  // generate test data
  $scope.generateUsers = function () {
	  // call the delete remote service
	  userFactory.generateUsers().$promise.then(function(data) {
	      $scope.userList = userFactory.query();
	      $scope.restCreateActionMessage = 'Generation successful';
	      $scope.restDeleteActionMessage = '';
      });
  };
  
  // delete all data
  $scope.deleteAllUsers = function () {
	  // call the delete remote service
	  userFactory.deleteAll().$promise.then(function(data) {
	      $scope.userList = userFactory.query();
	      $scope.restCreateActionMessage = '';
	      $scope.restDeleteActionMessage = 'All users have been removed';
      });
  };

  $scope.openDetail = function (user) {
	  detail = user;
	  alert('name ' + user.name);
//	  ngDialog.open({
//		    template: 'templateId'
//		});
  };

}]);