app.controller('HomeController', ["$scope", "$http", "$q", function ($scope, $http, $q) {

    'use strict';
    $scope.getFollowers = function () {
        var githubUser = $http.get("https://api.github.com/users/" + $scope.User),
            followers = $http.get("https://api.github.com/users/" + $scope.User + "/followers");
        $q.all([githubUser, followers])
            .then(function (resolve, reject) {
                if (resolve) {
                    console.log(resolve);
                    $scope.githubUser = resolve[0].data;
                    $scope.followers = resolve[1].data;
                } else {
                    console.log("reject");
                }
            });
    };

}]);
