'use strict';

angular.module('resuMEApp.service.hobby', [])

.factory('hobbyService',['$http', '$q', '$rootScope', function($http, $q, $rootScope){
    var factory ={
        'hobbies' : {},
        'loaded': false,
        'loadHobbies' : function(){
            var deffered = $q.defer();
            $http.get('app/hobby/getHobbies.php')
                .success(function(data, status){
                    factory.hobbies = data;
                    deffered.resolve(factory.hobbies);
                }).error(function(data, status){
                    deffered.reject('Impossible de récupérer les formations.')
                });
            return deffered.promise;
        },
        'getHobbies' : function(){
            return factory.hobbies;
        },
        'getHobby' : function(id){
            return factory.hobbies[0];
        },


        'updateHobbies' : function(hobbies){
            factory.skills = hobbies;
        },
        'updateModel' : function(hobbies){
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