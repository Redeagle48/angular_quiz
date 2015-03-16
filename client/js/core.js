var app = angular.module('two_way', []);
app.controller('two_way_control', function ($scope, $http, $interval) {
    load_pictures();
    getQuestion();

    function load_pictures() {
        $http.get('http://69.28.93.159:3000/load')
            .success(function (data) {
                $scope.profile_pictures = data;
                console.log(data);
            });
    };

    /* Get question */
    function getQuestion() {
        $http.get('http://69.28.93.159:3000/Question_Get')
            .success(function (data) {
                $scope.questions = data;
                console.log(data);
            });
    };

});