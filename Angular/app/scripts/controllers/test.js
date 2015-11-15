'use strict';
var testmod = angular.module('testmod', []);

testmod.controller('mainController', ['$scope', '$http', function($scope, $http) {
  $http.get('/gettests')
        .success(function(data) {
            $scope.greeting = angular.copy(data);
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });
}]);
