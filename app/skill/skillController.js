'use strict';

angular.module('resuMEApp.skill', [])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/competence', {
        templateUrl: 'app/skill/skillView.html',
        controller: 'skillController'
    });
}])

.controller('skillController', ['$scope', '$rootScope', 'skillService', function($scope, $rootScope, skillService) {

    if(!skillService.loaded){
        $scope.skills = skillService.loadSkills().then(function(skills){
            $scope.skills = skills;
            $scope.change();
            skillService.loaded=true;
        }, function(msg){
            alert('échec');
        });
    }else{
        $scope.skills = skillService.getSkills();
    }



    $scope.add = function(){
        $scope.skills.push( {
            content: ""
        });
    };

    $scope.close = function(skill){
        $scope.skills.splice($scope.skills.indexOf(skill),1);

    };

    $scope.change = function(){
        skillService.updateSkills($scope.skills);
        skillService.notify();
    }
}]);