'use strict';

angular.module('resuMEApp.service.user', [])

.factory('userService', ['$http', '$q', '$rootScope', function($http, $q, $rootScope){
    var factory ={
        'user' : {},
        'loaded' : false,
        'loadUser' : function(){
            var deffered = $q.defer();
            $http.get('app/user/getUserModel.php')
                .success(function(data, status){
                    factory.user = data[0];
                    factory.user.birth_date = new Date(factory.user.birth_date);
                    factory.getAge();

                    factory.user.checked_firstname = true;
                    factory.user.checked_lastname = true;
                    factory.user.checked_age = true;
                    factory.user.checked_tel = true;
                    factory.user.checked_mail = true;
                    factory.user.checked_website = true;
                    factory.user.checked_address = true;
                    factory.user.checked_postcode = true;
                    factory.user.checked_city = true;
                    deffered.resolve(factory.user);
                }).error(function(data, status){
                    deffered.reject('Impossible de récupérer l\'utilisateur.')
                })
            return deffered.promise;
        },
        'getUser' : function(){
            return factory.user;
        },
        'updateUser' : function(user){
            factory.user = user;
            factory.getAge();
        },
        'updateModel' : function(user){
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
        'getAge' : function() {
            var ageDifMs = Date.now() - factory.user.birth_date;
            var ageDate = new Date(ageDifMs); // miliseconds from epoch
            factory.user.age =  Math.abs(ageDate.getUTCFullYear() - 1970) + " ans";
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