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
            controller: function ($routeParams, QuestionFactory, $location) {
                this.message = $routeParams;

                this.test = function () {
                    return QuestionFactory.test();
                };

                this.messageTest = this.test();

                this.formData = {};
                
                this.onSubmit = function onSubmit() {
                    this.x = parseInt(this.message.id,10) + 1;
                    console.log("At question " + this.message.id + " passing to question " + this.x);
                    $location.path('question/' + this.x);
                };

            }
        }
    });