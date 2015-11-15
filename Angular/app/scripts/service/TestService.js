'use strict';

angular.module('testApp')
  .factory('TestService', ['$http', function($http){

	var opsFactory = {};
	var host = 'http://localhost:8080';


	opsFactory.getTest = function(successCallback,failureCallback){

		$http({
			method:'get',
			url: host+'/gettests',
		}).then(successCallback,failureCallback);
	};


}]);