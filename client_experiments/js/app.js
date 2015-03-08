var app = angular.module('app', [
    'ngRoute', 'ngSanitize']);

app.config(function ($routeProvider) {
    'use strict';

    $routeProvider
        .when('/start', {
            templateUrl: 'views/start.html',
            controller: 'StartController',
            controllerAs: 'startCtrl'
        })
        .when('/question/:id', {
            templateUrl: 'views/question.html',
            controller: 'QuestionController',
            controllerAs: 'questionCtrl'
        })
        .when('/end', {
            templateUrl: '',
            controller: ''
        })
        .otherwise({
            redirectTo: '/start'
        });
});