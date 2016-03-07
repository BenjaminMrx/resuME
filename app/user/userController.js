'use strict';

angular.module('resuMEApp.user', [])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/user', {
        templateUrl: 'app/user/userFormView.html',
        controller: 'userController'
    });
}])

.controller('userController', ['$scope', 'userService', function($scope, userService) {

    if(!userService.loaded){
        $scope.user = userService.loadUser().then(function(user){
            $scope.user = user;
            $scope.change();
            userService.loaded=true;
        }, function(msg){
            alert('échec');
        });
    }else{
        $scope.user = userService.getUser();
    }

    $scope.save = function(){
        userService.updateModel($scope.user);
    };

    $scope.change = function(){
        userService.updateUser($scope.user);
        userService.notify();
    }

}]);
