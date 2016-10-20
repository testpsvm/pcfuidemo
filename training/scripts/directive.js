trainingModule.directive('traininglist', function() {
	return {
		restrict : 'E',
		templateUrl : 'training/templates/trainingList.html'
	};
}).directive('trainingcreateform', function() {
	return {
		restrict : 'E',
		templateUrl : 'training/templates/trainingCreateForm.html'
	};
}).directive('trainingmain', function() {
	return {
		restrict : 'E',
		templateUrl : 'training/templates/trainingMain.html'
	};
})