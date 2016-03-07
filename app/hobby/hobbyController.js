'use strict';

angular.module('resuMEApp.hobby', [])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/loisir', {
        templateUrl: 'app/hobby/hobbyView.html',
        controller: 'hobbyController'
    });
}])

.controller('hobbyController', ['$scope', '$rootScope', 'hobbyService', function($scope, $rootScope, hobbyService) {

    if(!hobbyService.loaded){

        $scope.hobbies = hobbyService.loadHobbies().then(function(hobbies){
            $scope.hobbies = hobbies;
            $scope.change();
            hobbyService.loaded=true;
        }, function(msg){
            alert('échec');
        });
    }else{
        $scope.hobbies = hobbyService.getHobbies();
    }

    $scope.add = function(){
        $scope.hobbies.push( {
            content: ""
        });
    };

    $scope.close = function(hobby){
        $scope.hobbies.splice($scope.hobbies.indexOf(hobby),1);

    };

    $scope.change = function(){
        hobbyService.updateHobbies($scope.hobbies);
        hobbyService.notify();
    }
}]);