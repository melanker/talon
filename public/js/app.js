webApp = angular.module('webApp', ['ui.bootstrap']);

webApp.controller('CarouselDemoCtrl', function($scope) {
    var BASE_URL = 'https://dl.dropboxusercontent.com/u/25108583/header';
    $scope.myInterval = 5000;
    $scope.slides = [{image: BASE_URL + '1.png'}, {image: BASE_URL + '2.png'}, {image:BASE_URL + '3.png'}];
});

