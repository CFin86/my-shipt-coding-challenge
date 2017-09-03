app.controller("HomeController", ["$scope", "$http", "$state", "$q", function ($scope, $http, $state, $q) {

    "use strict";

    $scope.userInfo = true;
    $scope.available = true;
    $scope.loadMore = true;
    $scope.restart = true;

    $scope.search = function () {
        var count = 1;
        var githubUser = $http.get("https://api.github.com/users/" + $scope.User),
            followers = $http.get("https://api.github.com/users/" + $scope.User + "/followers");
        $q.all([githubUser, followers])
            .then(function (resolve) {
                if (resolve) {
                    console.log(resolve)
                    $scope.userInfo = false;
                    $scope.githubUser = resolve[0].data;
                    $scope.followers = resolve[1].data;
                    if ($scope.followers.length > 30) {
                        $scope.loadMore = false;
                    } else {
                        $scope.loadMore = true;
                    }
                } else {
                    $scope.available = $scope.available ? false : true;
                }
            });
    };

    var count = 1;
    $scope.moreFollowers = function () {
        count++;
        $http.get("https://api.github.com/users/" + $scope.User + "/followers?page=" + count)
            .then(function (response) {
                $scope.pagination = response.data;
                if ($scope.pagination.length < 28) {
                    count = 1;
                    $scope.loadMore = true;
                    $scope.restart = false;
                    $scope.startOver = function () {
                        $state.reload();
                    };
                }
            });
    };


}]);