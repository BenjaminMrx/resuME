'use strict';

angular.module('resuMEApp.service.formation', [])

.factory('formationService',['$http', '$q', '$rootScope', function($http, $q, $rootScope){
    var factory ={
        'formations' : {},
        'loaded': false,
        'loadFormations' : function(){
            var deffered = $q.defer();
            $http.get('app/formation/getFormations.php')
                .success(function(data, status){
                    factory.formations = data;
                    deffered.resolve(factory.formations);
                }).error(function(data, status){
                    deffered.reject('Impossible de récupérer les formations.')
                })
            return deffered.promise;
        },
        'getFormations' : function(){
            return factory.formations;
        },
        'getFormation' : function(id){
            return factory.formations[0];
        },


        'updateFormations' : function(formations){
            factory.formations = formations;
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