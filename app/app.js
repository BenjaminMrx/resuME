'use strict';

var resuMEApp = angular.module('resuMEApp', [
    'ngRoute',
    'slugifier',
    'resuMEApp.user',
    'resuMEApp.service.user',
    'resuMEApp.experience',
    'resuMEApp.service.experience',
    'resuMEApp.formation',
    'resuMEApp.service.formation',
    'resuMEApp.skill',
    'resuMEApp.service.skill',
    'resuMEApp.hobby',
    'resuMEApp.service.hobby',
    'resuMEApp.preview'
])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/user'});
    }])
    /*.directive("contenteditable", function() {
        return {
            restrict: "A",
            require: "ngModel",
            link: function(scope, element, attrs, ngModel) {
                function read() {
                    ngModel.$setViewValue(element.html());
                }

                ngModel.$render = function() {
                    element.html(ngModel.$viewValue || "");
                };

                element.bind("blur keyup change", function() {
                    scope.$apply(read);
                });
            }
        };
    })*/;
