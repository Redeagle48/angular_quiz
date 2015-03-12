var app = angular.module('app');

app.controller('QuestionController',
    function QuestionController($routeParams) {
        'use strict';
        var vm = this;
        vm.title = "question screen";
    });