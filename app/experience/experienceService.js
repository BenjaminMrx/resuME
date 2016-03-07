'use strict';

angular.module('resuMEApp.service.experience', [])

.factory('experienceService',['$http', '$q','$rootScope', function($http, $q, $rootScope){
    var factory ={
        'experiences' : {},
        'loaded': false,
        'loadExperiences' : function(){
            var deffered = $q.defer();
            $http.get('app/experience/getExperiences.php')
                .success(function(data, status){
                    factory.experiences = data;
                    deffered.resolve(factory.experiences);
                }).error(function(data, status){
                    deffered.reject('Impossible de récupérer les expériences.')
                })
            return deffered.promise;
        },
        'getExperiences' : function(){
            return factory.experiences;
        },
        'getExperience' : function(id){
            return factory.experiences[0];
        },


        'updateExperiences' : function(experiences){
            factory.experiences = experiences;
        },
        'updateModel' : function(experiences){
            return $http({
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                url: 'app/user/updateUserModel.php',
                method: "POST",
                data: user
            })
                .success(function(addData) {
                    console.log('Utilisateur sauvegardé');
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