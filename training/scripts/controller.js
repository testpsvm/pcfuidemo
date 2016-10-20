
// declaration du controller trainingController
trainingModule.controller('trainingController', ['$scope', 'trainingFactory', function ($scope, trainingFactory) {
	
	// la liste des training
	$scope.trainingList = trainingFactory.query();

	// le parametre utilisé pour les tris
	$scope.sortColumn =   'name';
  
	// message sur une action de création
	$scope.restCreateActionMessage = '';
	// message sur une action de suppression
	$scope.restDeleteActionMessage = '';

	// initialisation de l'"object" nouvel training
	$scope.newtraining = {
		id:"",
		title:"",
		shortTitle:"",
		showDel:false
	};  

	// méthode d'ajout d'un training
	$scope.addTraining = function (training) {
		trainingFactory.save(training).$promise.then(function(data) {
	  	  $scope.trainingList = trainingFactory.query();
	      // we reinit the new training attributes
		  $scope.newtraining.name= '';
		  $scope.newtraining.firstName= '';
		  $scope.newtraining.showDel=false;
		  $scope.restCreateActionMessage = 'Creation successful';
	      $scope.restDeleteActionMessage = '';
	  });
  };

  // remove training action
  $scope.removeTraining = function (training) {
	  // call the delete remote service
	  trainingFactory.delete(training).$promise.then(function(data) {
	      $scope.trainingList = trainingFactory.query();
	      $scope.restCreateActionMessage = '';
	      $scope.restDeleteActionMessage = data.message;
      });
  };
  
  // generate test data
  $scope.generateTrainings = function () {
	  // call the delete remote service
	  trainingFactory.generateTrainings().$promise.then(function(data) {
	      $scope.trainingList = trainingFactory.query();
	      $scope.restCreateActionMessage = 'Generation successful';
	      $scope.restDeleteActionMessage = '';
      });
  };
  
  // delete all data
  $scope.deleteAllTrainings = function () {
	  // call the delete remote service
	  trainingFactory.deleteAll().$promise.then(function(data) {
	      $scope.trainingList = trainingFactory.query();
	      $scope.restCreateActionMessage = '';
	      $scope.restDeleteActionMessage = 'All trainings have been removed';
      });
  };


}]);