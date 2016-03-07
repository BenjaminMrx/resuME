'use strict';

angular.module('resuMEApp.service.skill', [])

.factory('skillService',['$http', '$q', '$rootScope', function($http, $q, $rootScope){
    var factory ={
        'skills' : {},
        'loaded': false,
        'loadSkills' : function(){
            var deffered = $q.defer();
            $http.get('app/skill/getSkills.php')
                .success(function(data, status){
                    factory.skills = data;
                    deffered.resolve(factory.skills);
                }).error(function(data, status){
                    deffered.reject('Impossible de récupérer les formations.')
                });
            return deffered.promise;
        },
        'getSkills' : function(){
            return factory.skills;
        },
        'getSkill' : function(id){
            return factory.skills[0];
        },


        'updateSkills' : function(skills){
            factory.skills = skills;
        },
        'updateModel' : function(experiences){
            return $http({
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                url: 'app/user/updateUserModel.php',
                method: "POST",
                data: user
            })
                .success(function(addData) {
                    console.log('Formations sauvegardées');
                }).error(function(){
                    console.log('that\'s a fail');
                });
        },



        // NOTIFICATION CHANGEMENT
        'subscribe' : function(scope, callback) {
            var handler = $rootScope.$on('notifying-service-event', callback);
            scope.$on('$destroy', handler);
        },

        'notify' : function() {
            $rootScope.$emit('notifying-service-event');
        }
    };

    return factory;
}]);