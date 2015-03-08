var app = angular.module('app');

app.controller('StartController',
    function StartController($location) {
        'use strict';
        var vm = this;
        vm.title = "Start Screen";

        vm.startQuestions = function (id) {
            if (angular.isNumber(id)) {
                console.log("In startQuestion() -> Jumping from start screen to first question");
                $location.path('question/' + id);
            }
        }

    });