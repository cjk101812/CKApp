'use strict';

angular.module('testmod')
  .factory('TestService', ['$http', function($http){

	var testFactory = {};
	var host = 'http://localhost:8080';


	testFactory.getTest = function(successCallback,failureCallback){

		$http({
			method:'get',
			url: host+'/gettests',
		}).then(successCallback,failureCallback);
	};

	testFactory.getUser = function(user,successCallback,failureCallback){

		$http({
			method:'get',
			url: host+'/gettests/' + user,
		}).then(successCallback,failureCallback);
	};

	return testFactory;

}]);