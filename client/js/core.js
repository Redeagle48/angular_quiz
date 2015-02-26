var app = angular.module('two_way',[]);
app.controller('two_way_control', function($scope, $http, $interval) {
    load_pictures();
    
    
    function load_pictures() {
        $http.get('http://69.28.93.159:3000/load')
            .success(function(data) {
                $scope.profile_pictures = data;
                console.log(data);
            });
    };
});