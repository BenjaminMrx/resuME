'use strict';

angular.module('resuMEApp.formation', [])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/formation', {
        templateUrl: 'app/formation/formationView.html',
        controller: 'formationController'
    });
}])

.controller('formationController', ['$scope', '$rootScope', 'formationService', function($scope, $rootScope, formationService) {
    if(!formationService.loaded){
        $scope.formations = formationService.loadFormations().then(function(formations){
            $scope.formations = formations;
            $scope.change();
            formationService.loaded=true;
        }, function(msg){
            alert('échec');
        });
    }else{
        $scope.formations = formationService.getFormations();
    }


    $scope.add = function(){
        $scope.formations.push( {
            date_deb:"",
            date_fin:"",
            name:"",
            content: ""
        });
    };


    $scope.close = function(formation){
        $scope.formations.splice($scope.formations.indexOf(formation),1);

    };

    $scope.change = function(){
        formationService.updateFormations($scope.formations);
        formationService.notify();
    }
}]);