'use strict';

angular.module('resuMEApp.experience', [])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/experiences', {
        templateUrl: 'app/experience/experienceView.html',
        controller: 'expController'
    });
}])

.controller('expController', ['$scope', '$rootScope', 'experienceService', function($scope, $rootScope, experienceService) {
    if(!experienceService.loaded){
        $scope.experiences = experienceService.loadExperiences().then(function(experiences){
            $scope.experiences = experiences;
            $scope.change();
            experienceService.loaded=true;
        }, function(msg){
            alert('échec');
        });
    }else{
        $scope.experiences = experienceService.getExperiences();
    }

    $scope.idIterateur =1;

    $scope.add = function(){
        $scope.experiences.push( {
            id:"temp"+$scope.idIterateur,
            date_deb:"",
            date_fin:"",
            name:"",
            content: ""
        });
        $scope.idIterateur++;
    };

    $scope.close = function(exp){
        $scope.experiences.splice($scope.experiences.indexOf(exp),1);

    };

    $scope.change = function(){
        experienceService.updateExperiences($scope.experiences);
        experienceService.notify();
    }
}]);