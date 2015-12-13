'use strict';

angular.module('testmod', [])
    .controller('mainController', ['$scope', 'TestService', '$http', function ($scope, TestService, $http) {
    
    $scope.user = "";

    $scope.getUser = function(user){
        TestService.getUser(user);
        console.log("USER: " + user);
        $scope.user = "Welcome, " + user + "!";
        document.getElementById("loginsection").style.display = "none";
        document.getElementById("loggedin").style.display = "inline";
    }

    $scope.logout = function(){
        $scope.user = "";
        document.getElementById("loginsection").style.display = "inline";
        document.getElementById("loggedin").style.display = "none";
    }    

}]);
