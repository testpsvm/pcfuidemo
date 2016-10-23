userModule.directive('userlist', function() {
	return {
		restrict : 'E',
		templateUrl : 'user/templates/userList.html'
	};
}).directive('usercreateform', function() {
	return {
		restrict : 'E',
		templateUrl : 'user/templates/userCreateForm.html'
	};
})