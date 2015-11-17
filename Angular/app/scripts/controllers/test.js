'use strict';

angular.module('testmod', [])
    .controller('mainController', ['$scope', 'TestService', '$http', function ($scope, TestService, $http) {
    
    $scope.user = "";

    $scope.getUser = function(user){
        TestService.getUser(user);
        console.log("USER: " + user);
        $scope.user = "Angular working! Welcome: " + user;
    }    

}]);
