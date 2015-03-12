/**
 * Directive: Email <email></email>
 */
angular.module('app')
    .directive('question', function QuestionDrctv() {
    'use strict';

    return {
        restrict: 'E',
        replace: true,
        scope: true,
        templateUrl: "js/directives/question.tmpl.html",
        controllerAs: 'question',
        controller: function ($routeParams, QuestionFactory) {
            this.message = $routeParams;
            
            this.test = function () {
                return QuestionFactory.test();
            };
            
            this.messageTest = this.test();
            
            this.formData = {};
            
        }
    }
});