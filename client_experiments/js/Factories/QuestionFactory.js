angular.module('app')
    .factory('QuestionFactory', function QuestionFactory ($q, $http, $routeParams) {
    'use strict';
    var exports = {};

    exports.test = function Test () {
        return "Test with Success";
    }

    return exports;
});
