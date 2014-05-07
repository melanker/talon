webApp = angular.module('webApp', ['ngRoute','ui.bootstrap']);


webApp.controller('HomeCtrl', function($scope) {

 });

//router logic
webApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/home', {
            templateUrl: 'partials/home.html',
            controller: 'HomeCtrl'
        })
        .otherwise({redirectTo: '/home'});
}]);