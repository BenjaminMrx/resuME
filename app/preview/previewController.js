'use strict';

angular.module('resuMEApp.preview', [])

    .controller('previewController', [
        '$scope',
        'userService',
        'experienceService',
        'formationService',
        'skillService',
        'hobbyService',

        function($scope, userService, experienceService, formationService, skillService, hobbyService) {

            $scope.user = userService.loadUser().then(function(user){
                $scope.user = user;
            }, function(msg){
                alert('échec');
            });

            $scope.experiences = experienceService.loadExperiences().then(function(experiences){
                $scope.experiences = experiences;
            }, function(msg){
                alert('échec');
            });

            $scope.formations = formationService.loadFormations().then(function(formations){
                $scope.formations = formations;
            }, function(msg){
                alert('échec');
            });

            $scope.skills = skillService.loadSkills().then(function(skills){
                $scope.skills = skills;
            }, function(msg){
                alert('échec');
            });

            $scope.hobbies = hobbyService.loadHobbies().then(function(hobbies){
                $scope.hobbies = hobbies;
            }, function(msg){
                alert('échec');
            });

        userService.subscribe($scope, function somethingChanged() {
            // Handle notification
            $scope.user = userService.getUser();
            $scope.experiences = experienceService.getExperiences();
            $scope.formations = formationService.getFormations();
            $scope.skills = skillService.getSkills();
            $scope.hobbies = hobbyService.getHobbies();
        });

    }]);